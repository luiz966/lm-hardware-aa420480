import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo-checkout.png";

const estados = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState("cartao");
  
  const frete = totalPrice > 0 ? Math.max(totalPrice * 0.1, 15) : 0;
  const total = totalPrice + frete;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Build WhatsApp message
    const nome = formData.get("nome");
    const email = formData.get("email");
    const telefone = formData.get("telefone");
    const cep = formData.get("cep");
    const estado = formData.get("estado");
    const cidade = formData.get("cidade");
    const bairro = formData.get("bairro");
    const rua = formData.get("rua");
    const numero = formData.get("numero");
    const complemento = formData.get("complemento");
    const observacoes = formData.get("observacoes");
    
    let message = `*NOVO PEDIDO - LM Hardware*\n\n`;
    message += `*DADOS PESSOAIS*\n`;
    message += `Nome: ${nome}\n`;
    message += `Email: ${email}\n`;
    message += `Telefone: ${telefone}\n\n`;
    
    message += `*ENDEREÇO DE ENTREGA*\n`;
    message += `CEP: ${cep}\n`;
    message += `${rua}, ${numero}${complemento ? ` - ${complemento}` : ""}\n`;
    message += `${bairro} - ${cidade}/${estado}\n\n`;
    
    message += `*PRODUTOS*\n`;
    items.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Qtd: ${item.quantity} x R$ ${item.price.toFixed(2).replace(".", ",")}\n`;
      message += `  Subtotal: R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n\n`;
    });
    
    message += `*RESUMO DO PEDIDO*\n`;
    message += `Subtotal: R$ ${totalPrice.toFixed(2).replace(".", ",")}\n`;
    message += `Frete: R$ ${frete.toFixed(2).replace(".", ",")}\n`;
    message += `*TOTAL: R$ ${total.toFixed(2).replace(".", ",")}*\n\n`;
    
    message += `*FORMA DE PAGAMENTO*\n`;
    message += `${paymentMethod === "cartao" ? "Cartão" : paymentMethod === "boleto" ? "Boleto" : paymentMethod === "pix" ? "PIX" : "Dinheiro"}\n\n`;
    
    if (observacoes) {
      message += `*OBSERVAÇÕES*\n${observacoes}\n`;
    }
    
    const whatsappUrl = `https://wa.me/5545999957890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Pedido enviado!",
      description: "Você será redirecionado para o WhatsApp para finalizar o pedido.",
    });
    
    clearCart();
    setTimeout(() => navigate("/"), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-blue-dark/20 to-background flex items-center justify-center p-4">
        <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Carrinho Vazio</h2>
          <p className="text-muted-foreground mb-6">Adicione produtos ao carrinho antes de fazer um pedido.</p>
          <Button onClick={() => navigate("/")} className="w-full">
            Voltar para a Loja
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-dark/20 to-background py-8 px-4">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl p-8 animate-fade-in">
        <img src={logo} alt="LM Hardware" className="mx-auto mb-6 max-w-[250px] h-auto rounded-lg" />
        
        <h1 className="text-3xl font-bold text-primary text-center mb-2">Fazer Pedido</h1>
        <p className="text-center text-muted-foreground mb-8">
          Preencha os dados abaixo para finalizar seu pedido na LM Hardware.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados Pessoais */}
          <div>
            <h2 className="text-xl font-semibold text-primary border-b-2 border-border pb-2 mb-4">
              Dados Pessoais
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome" className="required">Nome Completo</Label>
                <Input id="nome" name="nome" placeholder="Seu nome completo" required />
              </div>
              <div>
                <Label htmlFor="cpf" className="required">CPF</Label>
                <Input id="cpf" name="cpf" placeholder="000.000.000-00" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="email" className="required">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required />
              </div>
              <div>
                <Label htmlFor="telefone" className="required">Telefone</Label>
                <Input id="telefone" name="telefone" type="tel" placeholder="(45) 99999-9999" required />
              </div>
            </div>
          </div>

          {/* Endereço de Entrega */}
          <div>
            <h2 className="text-xl font-semibold text-primary border-b-2 border-border pb-2 mb-4">
              Endereço de Entrega
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cep" className="required">CEP</Label>
                <Input id="cep" name="cep" placeholder="00000-000" required />
              </div>
              <div>
                <Label htmlFor="estado" className="required">Estado</Label>
                <Select name="estado" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((estado) => (
                      <SelectItem key={estado.value} value={estado.value}>
                        {estado.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="cidade" className="required">Cidade</Label>
                <Input id="cidade" name="cidade" placeholder="Sua cidade" required />
              </div>
              <div>
                <Label htmlFor="bairro" className="required">Bairro</Label>
                <Input id="bairro" name="bairro" placeholder="Seu bairro" required />
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="md:col-span-3">
                <Label htmlFor="rua" className="required">Rua</Label>
                <Input id="rua" name="rua" placeholder="Nome da rua" required />
              </div>
              <div>
                <Label htmlFor="numero" className="required">Número</Label>
                <Input id="numero" name="numero" placeholder="Nº" required />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="complemento">Complemento</Label>
              <Input id="complemento" name="complemento" placeholder="Apartamento, bloco, etc." />
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h2 className="text-xl font-semibold text-primary border-b-2 border-border pb-2 mb-4">
              Produtos
            </h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity}x R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <p className="font-bold text-primary">
                    R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Forma de Pagamento */}
          <div>
            <h2 className="text-xl font-semibold text-primary border-b-2 border-border pb-2 mb-4">
              Forma de Pagamento
            </h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <RadioGroupItem value="cartao" id="cartao" className="peer sr-only" />
                <Label
                  htmlFor="cartao"
                  className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                >
                  Cartão
                </Label>
              </div>
              <div>
                <RadioGroupItem value="boleto" id="boleto" className="peer sr-only" />
                <Label
                  htmlFor="boleto"
                  className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                >
                  Boleto
                </Label>
              </div>
              <div>
                <RadioGroupItem value="pix" id="pix" className="peer sr-only" />
                <Label
                  htmlFor="pix"
                  className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                >
                  PIX
                </Label>
              </div>
              <div>
                <RadioGroupItem value="dinheiro" id="dinheiro" className="peer sr-only" />
                <Label
                  htmlFor="dinheiro"
                  className="flex items-center justify-center rounded-lg border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                >
                  Dinheiro
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Observações */}
          <div>
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea
              id="observacoes"
              name="observacoes"
              placeholder="Alguma observação sobre o pedido..."
              rows={4}
            />
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Resumo do Pedido</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span>R$ {frete.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                <span>Total:</span>
                <span className="text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Finalizar Pedido
          </Button>
        </form>
      </div>
    </div>
  );
}
