export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Intel Core i5-13400F",
    category: "Processadores",
    price: 899.90,
    image: "/products/i5-13400f.jpg",
    description: "Processador Intel Core i5 13ª Geração, 10 núcleos (6P+4E), 16 threads, até 4.6GHz",
    specs: ["10 Núcleos", "16 Threads", "Base 2.5GHz / Turbo 4.6GHz", "Socket LGA1700"],
    inStock: true
  },
  {
    id: "2",
    name: "AMD Ryzen 5 5600",
    category: "Processadores",
    price: 749.90,
    image: "/products/ryzen5-5600.jpg",
    description: "Processador AMD Ryzen 5 5600, 6 núcleos, 12 threads, até 4.4GHz, AM4",
    specs: ["6 Núcleos", "12 Threads", "Base 3.5GHz / Turbo 4.4GHz", "Socket AM4"],
    inStock: true
  },
  {
    id: "3",
    name: "NVIDIA RTX 4060 8GB",
    category: "Placas de Vídeo",
    price: 1899.90,
    image: "/products/rtx4060.jpg",
    description: "Placa de Vídeo NVIDIA GeForce RTX 4060, 8GB GDDR6, Ray Tracing, DLSS 3",
    specs: ["8GB GDDR6", "Ray Tracing", "DLSS 3.0", "PCI-E 4.0"],
    inStock: true
  },
  {
    id: "4",
    name: "AMD Radeon RX 6600 8GB",
    category: "Placas de Vídeo",
    price: 1399.90,
    image: "/products/rx6600.jpg",
    description: "Placa de Vídeo AMD Radeon RX 6600, 8GB GDDR6, Ray Tracing",
    specs: ["8GB GDDR6", "Ray Tracing", "AMD FidelityFX", "PCI-E 4.0"],
    inStock: true
  },
  {
    id: "5",
    name: "Memória RAM Kingston Fury 16GB",
    category: "Memórias",
    price: 299.90,
    image: "/products/kingston-16gb.jpg",
    description: "Memória Kingston Fury Beast DDR4 16GB (2x8GB) 3200MHz",
    specs: ["16GB (2x8GB)", "DDR4 3200MHz", "CL16", "RGB"],
    inStock: true
  },
  {
    id: "6",
    name: "Memória RAM Corsair Vengeance 32GB",
    category: "Memórias",
    price: 599.90,
    image: "/products/corsair-32gb.jpg",
    description: "Memória Corsair Vengeance RGB DDR4 32GB (2x16GB) 3600MHz",
    specs: ["32GB (2x16GB)", "DDR4 3600MHz", "CL18", "RGB Customizável"],
    inStock: true
  },
  {
    id: "7",
    name: "SSD Kingston NV2 500GB",
    category: "Armazenamento",
    price: 249.90,
    image: "/products/kingston-ssd-500gb.jpg",
    description: "SSD Kingston NV2 500GB M.2 NVMe PCIe 4.0",
    specs: ["500GB", "M.2 NVMe", "Leitura 3500MB/s", "PCIe 4.0"],
    inStock: true
  },
  {
    id: "8",
    name: "SSD Samsung 980 1TB",
    category: "Armazenamento",
    price: 449.90,
    image: "/products/samsung-980-1tb.jpg",
    description: "SSD Samsung 980 1TB M.2 NVMe PCIe 3.0",
    specs: ["1TB", "M.2 NVMe", "Leitura 3500MB/s", "5 anos garantia"],
    inStock: true
  },
  {
    id: "9",
    name: "Placa Mãe ASUS TUF B550M",
    category: "Placas-Mãe",
    price: 699.90,
    image: "/products/asus-b550m.jpg",
    description: "Placa Mãe ASUS TUF Gaming B550M-PLUS, AMD AM4, mATX, DDR4",
    specs: ["Socket AM4", "Chipset B550", "DDR4", "M.2 PCIe 4.0"],
    inStock: true
  },
  {
    id: "10",
    name: "Placa Mãe Gigabyte B760M",
    category: "Placas-Mãe",
    price: 799.90,
    image: "/products/gigabyte-b760m.jpg",
    description: "Placa Mãe Gigabyte B760M Gaming X DDR4, Intel LGA1700, mATX",
    specs: ["Socket LGA1700", "Chipset B760", "DDR4", "PCIe 4.0"],
    inStock: true
  },
  {
    id: "11",
    name: "Fonte Corsair CV650 650W",
    category: "Fontes",
    price: 349.90,
    image: "/products/corsair-cv650.jpg",
    description: "Fonte Corsair CV650 650W 80 Plus Bronze",
    specs: ["650W", "80 Plus Bronze", "PFC Ativo", "3 anos garantia"],
    inStock: true
  },
  {
    id: "12",
    name: "Gabinete Rise Mode Galaxy Glass",
    category: "Gabinetes",
    price: 299.90,
    image: "/products/rise-galaxy.jpg",
    description: "Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, Vidro Temperado, 3 Fans RGB",
    specs: ["Mid Tower", "Vidro Temperado", "3x Fans RGB", "USB 3.0"],
    inStock: true
  },
  {
    id: "13",
    name: "Water Cooler Rise Mode Gamer Black",
    category: "Coolers",
    price: 349.90,
    image: "/products/watercooler-rise.jpg",
    description: "Water Cooler Rise Mode Gamer Black RGB 240mm",
    specs: ["Radiador 240mm", "2x Fans RGB", "Intel/AMD", "TDP 180W"],
    inStock: true
  },
  {
    id: "14",
    name: "Monitor LG UltraGear 24' 144Hz",
    category: "Monitores",
    price: 899.90,
    image: "/products/lg-24-144hz.jpg",
    description: "Monitor Gamer LG UltraGear 24 Polegadas Full HD IPS 144Hz 1ms",
    specs: ["24 Polegadas", "Full HD 1080p", "144Hz", "IPS 1ms"],
    inStock: true
  },
  {
    id: "15",
    name: "Teclado Mecânico Redragon Kumara",
    category: "Periféricos",
    price: 249.90,
    image: "/products/redragon-kumara.jpg",
    description: "Teclado Mecânico Gamer Redragon Kumara, RGB, Switch Outemu Blue, ABNT2",
    specs: ["Mecânico", "RGB", "Switch Outemu Blue", "ABNT2"],
    inStock: true
  },
  {
    id: "16",
    name: "Mouse Logitech G203",
    category: "Periféricos",
    price: 149.90,
    image: "/products/logitech-g203.jpg",
    description: "Mouse Gamer Logitech G203 RGB 8000 DPI",
    specs: ["8000 DPI", "RGB Lightsync", "6 Botões", "USB"],
    inStock: true
  },
  {
    id: "17",
    name: "Headset HyperX Cloud Stinger",
    category: "Periféricos",
    price: 299.90,
    image: "/products/hyperx-stinger.jpg",
    description: "Headset Gamer HyperX Cloud Stinger, Drivers 50mm, Preto",
    specs: ["Drivers 50mm", "Microfone com cancelamento", "Leve 275g", "Confortável"],
    inStock: true
  },
  {
    id: "18",
    name: "Mousepad Gamer Rise Mode Galaxy",
    category: "Periféricos",
    price: 79.90,
    image: "/products/mousepad-rise.jpg",
    description: "Mousepad Gamer Rise Mode Galaxy RGB, Grande (800x300mm)",
    specs: ["800x300mm", "RGB", "Base Antiderrapante", "Superfície Speed"],
    inStock: true
  },
  {
    id: "19",
    name: "HD Seagate BarraCuda 1TB",
    category: "Armazenamento",
    price: 279.90,
    image: "/products/seagate-1tb.jpg",
    description: "HD Seagate BarraCuda 1TB 7200RPM 64MB Cache SATA 6Gb/s",
    specs: ["1TB", "7200 RPM", "Cache 64MB", "SATA 6Gb/s"],
    inStock: true
  },
  {
    id: "20",
    name: "Cadeira Gamer DT3 Sports Elise",
    category: "Mobiliário",
    price: 899.90,
    image: "/products/cadeira-dt3.jpg",
    description: "Cadeira Gamer DT3 Sports Elise, Reclinável, Braços 3D, Preta e Azul",
    specs: ["Reclinável até 180°", "Braços 3D", "Almofadas Lombares", "Suporta 120kg"],
    inStock: true
  }
];

export const preBuiltPCs = [
  {
    id: "pc1",
    name: "PC Gamer Entry LM",
    category: "PCs Montados",
    price: 3799.90,
    image: "/products/pc-entry.jpg",
    description: "PC Gamer ideal para jogos em Full HD com ótimo desempenho",
    specs: [
      "AMD Ryzen 5 5600",
      "AMD RX 6600 8GB",
      "16GB RAM DDR4 3200MHz",
      "SSD 500GB NVMe",
      "Fonte 650W 80 Plus Bronze",
      "Gabinete Rise Mode RGB"
    ],
    components: ["2", "4", "5", "7", "11", "12"],
    inStock: true
  },
  {
    id: "pc2",
    name: "PC Gamer Performance LM",
    category: "PCs Montados",
    price: 5799.90,
    image: "/products/pc-performance.jpg",
    description: "PC Gamer de alta performance para jogos em Full HD/QHD",
    specs: [
      "Intel Core i5-13400F",
      "NVIDIA RTX 4060 8GB",
      "32GB RAM DDR4 3600MHz",
      "SSD 1TB NVMe",
      "Fonte 650W 80 Plus Bronze",
      "Water Cooler 240mm RGB",
      "Gabinete Rise Mode RGB"
    ],
    components: ["1", "3", "6", "8", "11", "12", "13"],
    inStock: true
  },
  {
    id: "pc3",
    name: "Setup Gamer Completo LM",
    category: "PCs Montados",
    price: 7499.90,
    image: "/products/setup-completo.jpg",
    description: "Setup gamer completo com PC, monitor, teclado, mouse e headset",
    specs: [
      "Intel Core i5-13400F",
      "NVIDIA RTX 4060 8GB",
      "32GB RAM DDR4 3600MHz",
      "SSD 1TB NVMe + HD 1TB",
      "Monitor 24' 144Hz",
      "Teclado Mecânico RGB",
      "Mouse 8000 DPI",
      "Headset Gamer",
      "Mousepad RGB"
    ],
    components: ["1", "3", "6", "8", "19", "14", "15", "16", "17", "18"],
    inStock: true
  }
];
