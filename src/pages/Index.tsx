import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { PreBuiltCard } from "@/components/PreBuiltCard";
import { Categories } from "@/components/Categories";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { products, preBuiltPCs } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-muted-foreground">Os melhores componentes para seu PC</p>
            </div>
            <Button variant="outline">
              Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PCs Montados */}
      <section id="pcs-montados" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">PCs Gamer Montados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistemas completos testados e otimizados, prontos para jogar. Todos com peças compatíveis e garantia de qualidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preBuiltPCs.map((pc) => (
              <PreBuiltCard key={pc.id} product={pc} />
            ))}
          </div>
        </div>
      </section>

      <Categories />

      {/* Mais Produtos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Mais Produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
