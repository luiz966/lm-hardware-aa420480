import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/data/products";

interface PreBuiltCardProps {
  product: Product;
}

export const PreBuiltCard = ({ product }: PreBuiltCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Pronto para Usar
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
        
        <div className="space-y-2 mb-4">
          {product.specs?.map((spec, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-sm text-muted-foreground">à vista</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Comprar Agora
        </Button>
        <Button variant="outline" className="flex-1">
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};
