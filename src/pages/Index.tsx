import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { PreBuiltCard } from "@/components/PreBuiltCard";
import { Categories } from "@/components/Categories";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { products, preBuiltPCs } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductFilters } from "@/components/ProductFilters";
import { useProductFilters } from "@/hooks/useProductFilters";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const {
    filters,
    setFilters,
    categories,
    priceRange,
    filteredProducts,
  } = useProductFilters(products);

  const featuredProducts = showAllProducts ? filteredProducts : products.slice(0, 8);

  const handleCategoryClick = (category: string) => {
    setFilters({
      ...filters,
      category: category,
    });
    setShowAllProducts(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {showAllProducts ? "Todos os Produtos" : "Produtos em Destaque"}
              </h2>
              <p className="text-muted-foreground">
                {showAllProducts
                  ? `${filteredProducts.length} ${filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}`
                  : "Os melhores componentes para seu PC"}
              </p>
            </div>
            <div className="flex gap-2">
              {showAllProducts && (
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] sm:w-[400px] overflow-y-auto">
                    <SheetHeader className="mb-6">
                      <SheetTitle>Filtros de Produtos</SheetTitle>
                    </SheetHeader>
                    <ProductFilters
                      filters={filters}
                      onFiltersChange={setFilters}
                      categories={categories}
                      priceRange={priceRange}
                    />
                  </SheetContent>
                </Sheet>
              )}
              <Button
                variant={showAllProducts ? "secondary" : "outline"}
                size="sm"
                onClick={() => setShowAllProducts(!showAllProducts)}
              >
                {showAllProducts ? "Ver Destaques" : "Ver Todos"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {showAllProducts && (
            <div className="hidden lg:block mb-8">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                categories={categories}
                priceRange={priceRange}
              />
            </div>
          )}

          {featuredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PCs Montados */}
      <section id="pcs-montados" className="py-16 bg-gradient-to-br from-blue-light/50 via-background to-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">PCs Gamer Montados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistemas completos testados e otimizados, prontos para jogar. Todos com peças compatíveis e garantia de qualidade.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {preBuiltPCs.map((pc) => (
                <CarouselItem key={pc.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <PreBuiltCard product={pc} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <Categories onCategoryClick={handleCategoryClick} />

      {!showAllProducts && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-primary">Mais Produtos</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore nossa seleção completa de componentes e periféricos para seu setup
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.slice(8).map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
