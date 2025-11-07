import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between gap-4">
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src={logo} 
              alt="LM Hardware" 
              className="h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-md" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#produtos" className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#pcs-montados" className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors">
              PCs Montados
            </a>
            <a href="#categorias" className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#contato" className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <a
              href="#produtos"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#pcs-montados"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              PCs Montados
            </a>
            <a
              href="#categorias"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </a>
            <a
              href="#contato"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
