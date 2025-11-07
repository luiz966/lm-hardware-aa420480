import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/95 to-hero-bg/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-hero-text mb-6 leading-tight">
            Potência e Performance para seu
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Setup Gamer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-hero-text/90 mb-8 max-w-2xl">
            As melhores peças, os melhores preços. Monte seu PC gamer ideal ou escolha um de nossos
            sistemas pré-montados com peças compatíveis e garantia de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Ver Produtos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-hero-bg">
              PCs Montados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
