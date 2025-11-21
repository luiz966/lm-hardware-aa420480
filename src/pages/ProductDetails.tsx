import { useParams, useNavigate } from "react-router-dom";
import { products, preBuiltPCs } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Buscar produto em ambas as listas
  const product = products.find(p => p.id === id) || preBuiltPCs.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar para Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Imagem do Produto */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Preço à vista</p>
              <p className="text-4xl font-bold text-primary mb-4">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <p className="text-sm text-muted-foreground">
                ou em até 10x de R$ {(product.price / 10).toFixed(2).replace(".", ",")} sem juros
              </p>
            </div>

            {product.specs && product.specs.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Especificações:</h3>
                <div className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
            </div>

            <div className="pt-6 border-t border-border space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Frete grátis para Cascavel e região</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Garantia de 12 meses</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Suporte técnico especializado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição Detalhada */}
        <div className="bg-card rounded-lg p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4">Descrição Detalhada</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {product.category === "PCs Montados" ? (
              <div className="space-y-4">
                <p>
                  O <strong>{product.name}</strong> foi cuidadosamente montado pela nossa equipe de especialistas
                  para oferecer o melhor desempenho e custo-benefício. Todos os componentes são testados
                  individualmente antes da montagem final.
                </p>
                <p>
                  Este PC vem com garantia completa de 12 meses e suporte técnico especializado. Realizamos
                  testes de stress e benchmarks para garantir estabilidade e performance em todas as situações.
                </p>
                <p>
                  Ideal para quem busca qualidade, performance e tranquilidade. Todos os drivers e atualizações
                  já vêm instalados, pronto para usar assim que receber em casa.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  O <strong>{product.name}</strong> é um produto de alta qualidade, selecionado pela LM Soluções em Hardware
                  por sua excelente performance e confiabilidade.
                </p>
                <p>
                  Todos os nossos produtos são originais, com garantia do fabricante e nota fiscal. 
                  Trabalhamos apenas com as melhores marcas do mercado para garantir sua satisfação.
                </p>
                <p>
                  Conte com nosso suporte técnico especializado para tirar dúvidas sobre instalação,
                  configuração e manutenção do produto.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
