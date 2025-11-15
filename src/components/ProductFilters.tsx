import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  categories: string[];
  priceRange: { min: number; max: number };
}

export const ProductFilters = ({
  filters,
  onFiltersChange,
  categories,
  priceRange,
}: ProductFiltersProps) => {
  const [localPriceRange, setLocalPriceRange] = useState([
    filters.minPrice,
    filters.maxPrice,
  ]);

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ ...filters, category: value });
  };

  const handleSortChange = (value: string) => {
    onFiltersChange({ ...filters, sortBy: value });
  };

  const handleStockChange = (checked: boolean) => {
    onFiltersChange({ ...filters, inStock: checked });
  };

  const handlePriceChange = (values: number[]) => {
    setLocalPriceRange(values);
  };

  const handlePriceCommit = (values: number[]) => {
    onFiltersChange({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1],
    });
  };

  const handleReset = () => {
    const resetFilters = {
      category: "all",
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      inStock: false,
      sortBy: "name-asc",
    };
    setLocalPriceRange([priceRange.min, priceRange.max]);
    onFiltersChange(resetFilters);
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.minPrice !== priceRange.min ||
    filters.maxPrice !== priceRange.max ||
    filters.inStock ||
    filters.sortBy !== "name-asc";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">Filtros</CardTitle>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="h-8 px-2 text-xs"
          >
            <X className="mr-1 h-3 w-3" />
            Limpar
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categoria */}
        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Faixa de Preço */}
        <div className="space-y-3">
          <Label>Faixa de Preço</Label>
          <div className="px-2">
            <Slider
              min={priceRange.min}
              max={priceRange.max}
              step={50}
              value={localPriceRange}
              onValueChange={handlePriceChange}
              onValueCommit={handlePriceCommit}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>R$ {localPriceRange[0].toFixed(0)}</span>
            <span>R$ {localPriceRange[1].toFixed(0)}</span>
          </div>
        </div>

        {/* Disponibilidade */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={filters.inStock}
            onCheckedChange={handleStockChange}
          />
          <Label
            htmlFor="inStock"
            className="text-sm font-normal cursor-pointer"
          >
            Apenas produtos em estoque
          </Label>
        </div>

        {/* Ordenação */}
        <div className="space-y-2">
          <Label htmlFor="sortBy">Ordenar por</Label>
          <Select value={filters.sortBy} onValueChange={handleSortChange}>
            <SelectTrigger id="sortBy">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
              <SelectItem value="price-asc">Menor Preço</SelectItem>
              <SelectItem value="price-desc">Maior Preço</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
