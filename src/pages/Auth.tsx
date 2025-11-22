import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo-auth.png";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const { error } = await signIn(email, password);
      if (!error) {
        navigate("/");
      }
    } else {
      const { error } = await signUp(email, password, name, phone);
      if (!error) {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-dark via-primary to-blue-medium flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <img src={logo} alt="LM Hardware" className="mx-auto mb-6 max-w-[300px] h-auto rounded-lg" />
        
        <h1 className="text-3xl font-bold text-primary text-center mb-2">
          {isLogin ? "Login" : "Cadastro"}
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          {isLogin 
            ? "Entre com sua conta para continuar" 
            : "Crie sua conta na LM Hardware"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(45) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="mt-2"
                />
              </div>
            </>
          )}

          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-foreground">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="mt-2"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {isLogin ? "Entrar" : "Criar Conta"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline font-medium text-sm"
          >
            {isLogin 
              ? "Não tem uma conta? Cadastre-se" 
              : "Já tenho uma conta"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary"
          >
            Voltar para a loja
          </Button>
        </div>
      </div>
    </div>
  );
}