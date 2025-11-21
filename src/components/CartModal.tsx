import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface CartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartModal = ({ open, onOpenChange }: CartModalProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Carrinho de Compras</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              Seu carrinho está vazio
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Carrinho de Compras ({items.length} {items.length === 1 ? 'item' : 'itens'})</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-lg border bg-card"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {item.category}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 ml-auto text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">
                  R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                </p>
                <p className="text-xs text-muted-foreground">
                  R$ {item.price.toFixed(2).replace(".", ",")} cada
                </p>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-4">
          <div className="flex items-center justify-between w-full pb-4 border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">
              R$ {totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <div className="flex gap-2 w-full">
            <Button variant="outline" onClick={clearCart} className="flex-1">
              Limpar Carrinho
            </Button>
            <Button 
              className="flex-1"
              onClick={() => {
                onOpenChange(false);
                navigate("/checkout");
              }}
            >
              Finalizar Compra
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
