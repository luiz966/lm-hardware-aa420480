import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/95 via-hero-bg/90 to-blue-darker/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-hero-text mb-6 leading-tight">
            Potência e Performance para seu
            <span className="bg-gradient-to-r from-blue-medium to-accent bg-clip-text text-transparent">
              {" "}Setup Gamer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-hero-text/90 mb-8 max-w-2xl">
            As melhores peças, os melhores preços. Monte seu PC gamer ideal ou escolha um de nossos
            sistemas pré-montados com peças compatíveis e garantia de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => scrollToSection('produtos')}
            >
              Ver Produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base border-2 border-blue-medium text-hero-text hover:bg-blue-medium/20 hover:border-accent transition-all duration-300"
              onClick={() => scrollToSection('pcs-montados')}
            >
              PCs Montados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
