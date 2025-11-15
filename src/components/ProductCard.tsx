import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          size="sm"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
