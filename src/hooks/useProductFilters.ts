import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import { FilterState } from "@/components/ProductFilters";

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    minPrice: 0,
    maxPrice: 10000,
    inStock: false,
    sortBy: "name-asc",
  });

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((p) => p.category))
    );
    return uniqueCategories.sort();
  }, [products]);

  // Get price range
  const priceRange = useMemo(() => {
    const prices = products.map((p) => p.price);
    return {
      min: Math.floor(Math.min(...prices) / 50) * 50,
      max: Math.ceil(Math.max(...prices) / 50) * 50,
    };
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Filter by price range
    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // Filter by stock
    if (filters.inStock) {
      result = result.filter((p) => p.inStock);
    }

    // Sort
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return result;
  }, [products, filters]);

  return {
    filters,
    setFilters,
    categories,
    priceRange,
    filteredProducts,
  };
};
