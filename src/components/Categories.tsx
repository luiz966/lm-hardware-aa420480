import { Cpu, Monitor, Keyboard, HardDrive, MemoryStick, Box } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  { name: "Processadores", icon: Cpu, color: "from-blue-dark via-primary to-blue-medium", category: "Processadores" },
  { name: "Placas de Vídeo", icon: Monitor, color: "from-accent via-blue-medium to-accent/80", category: "Placas de Vídeo" },
  { name: "Memórias RAM", icon: MemoryStick, color: "from-primary via-blue-medium to-accent", category: "Memórias" },
  { name: "Armazenamento", icon: HardDrive, color: "from-accent via-primary to-blue-dark", category: "Armazenamento" },
  { name: "Periféricos", icon: Keyboard, color: "from-blue-dark via-accent to-primary", category: "Periféricos" },
  { name: "Gabinetes", icon: Box, color: "from-blue-medium via-primary to-accent", category: "Gabinetes" },
];

interface CategoriesProps {
  onCategoryClick?: (category: string) => void;
}

export const Categories = ({ onCategoryClick }: CategoriesProps) => {
  const handleClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
    // Scroll to products section
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="categorias" className="py-16 bg-gradient-to-br from-blue-light via-background to-blue-light/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Navegue por Categorias</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Encontre exatamente o que você precisa navegando por nossas categorias especializadas
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              onClick={() => handleClick(category.category)}
              className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 hover:border-primary"
            >
              <div className="p-6 flex flex-col items-center gap-3">
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-center text-sm group-hover:text-primary transition-colors">{category.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
