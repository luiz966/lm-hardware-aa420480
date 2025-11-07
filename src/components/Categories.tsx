import { Cpu, Monitor, Keyboard, HardDrive, MemoryStick, Box } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  { name: "Processadores", icon: Cpu, color: "from-primary to-primary/80" },
  { name: "Placas de Vídeo", icon: Monitor, color: "from-accent to-accent/80" },
  { name: "Memórias RAM", icon: MemoryStick, color: "from-primary to-accent" },
  { name: "Armazenamento", icon: HardDrive, color: "from-accent to-primary" },
  { name: "Periféricos", icon: Keyboard, color: "from-primary to-primary/80" },
  { name: "Gabinetes", icon: Box, color: "from-accent to-accent/80" },
];

export const Categories = () => {
  return (
    <section id="categorias" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Navegue por Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col items-center gap-3">
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-center text-sm">{category.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
