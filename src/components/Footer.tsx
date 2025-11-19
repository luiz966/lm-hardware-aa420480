import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center mb-6 group">
              <img 
                src={logo} 
                alt="LM Hardware" 
                className="h-36 md:h-48 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-2xl" 
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Sua loja especializada em hardware e periféricos. Oferecemos os melhores produtos com os melhores preços do mercado.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Processadores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Placas de Vídeo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Memórias RAM</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Armazenamento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Periféricos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Troca</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li className="pt-2">
                <a href="tel:4580086579" className="hover:text-primary transition-colors">
                  (45) 8008-6579
                </a>
              </li>
              <li>
                <a href="tel:4599957890" className="hover:text-primary transition-colors">
                  (45) 99995-7890
                </a>
              </li>
              <li>
                <a href="mailto:LM.Hardware2025@gmail.com" className="hover:text-primary transition-colors">
                  LM.Hardware2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LM Hardware. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
