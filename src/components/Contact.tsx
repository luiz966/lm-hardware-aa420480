import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logoContact from "@/assets/logo-contact.png";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-blue-light via-background to-blue-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-xl bg-card/95 backdrop-blur-sm animate-fade-in">
              <div className="flex justify-center mb-6">
                <img 
                  src={logoContact} 
                  alt="LM Hardware" 
                  className="h-32 w-auto"
                />
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-center text-primary">Entre em Contato</h2>
              <p className="text-center text-muted-foreground mb-6 text-sm">
                Tem alguma dúvida ou precisa de suporte? Preencha o formulário abaixo que retornaremos em breve.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nome <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-mail <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(45) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-2 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Assunto <span className="text-destructive">*</span>
                    </Label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      required
                    >
                      <SelectTrigger id="subject" className="border-2 focus:border-primary transition-all">
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suporte_tecnico">Suporte Técnico</SelectItem>
                        <SelectItem value="orcamento">Orçamento</SelectItem>
                        <SelectItem value="vendas">Dúvidas sobre Vendas</SelectItem>
                        <SelectItem value="reclamacao">Reclamação</SelectItem>
                        <SelectItem value="elogio">Elogio</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Mensagem <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva sua dúvida, solicitação ou problema..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-2 focus:border-primary transition-all resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 shadow-xl bg-card/95 backdrop-blur-sm animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-primary">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-light/50 transition-colors">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Endereço</p>
                      <p className="text-sm text-muted-foreground">
                        Av. Tecnologia, 1000 - Centro<br />
                        Cascavel, PR - CEP 85800-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-light/50 transition-colors">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Telefone</p>
                      <a href="tel:4580086579" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        (45) 8008-6579
                      </a>
                      <a href="tel:4599957890" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        (45) 99995-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-light/50 transition-colors">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <a 
                        href="mailto:LM.Hardware2025@gmail.com" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        LM.Hardware2025@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-light/50 transition-colors">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg shadow-md">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                      <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-sm text-muted-foreground">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-xl bg-gradient-to-br from-primary to-accent text-white animate-fade-in">
                <h3 className="text-lg font-bold mb-3">Outras Formas de Contato</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">WhatsApp</span>
                    <a href="https://wa.me/5545999957890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      (45) 99995-7890
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Horário</span>
                    <span>Seg-Sex: 9h-18h</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
