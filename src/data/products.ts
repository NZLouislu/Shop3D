export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: ProductFeature[];
  specs: Record<string, string>;
  image: string;
  images: string[];
  model: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'octopus',
    name: 'Blue Plush Octopus',
    price: 29.99,
    description: 'Transform your space with this charming Blue Plush Octopus. Crafted with premium, ultra-soft materials, this plushie is designed for both comfort and aesthetic appeal. Whether you are looking for a cuddly companion or a unique decorative piece, this octopus brings a touch of oceanic wonder to any room.',
    features: [
      {
        title: 'Premium Comfort',
        description: 'Made with high-density ultra-soft plush fabric for a cloud-like feel.',
        icon: 'Cloud'
      },
      {
        title: 'Ergonomic Design',
        description: 'Realistic eight-tentacle structure that provides great tactile feedback.',
        icon: 'Heart'
      },
      {
        title: 'Safe for All',
        description: 'Features child-safe embroidered eyes and hypoallergenic filling.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Artistic Decor',
        description: 'Vibrant blue hue designed to complement modern interior aesthetics.',
        icon: 'Palette'
      }
    ],
    specs: {
      'Material': 'High-quality Polyester Fiber',
      'Dimensions': '12" x 12" x 8"',
      'Weight': '0.5 lbs',
      'Care': 'Hand wash recommended',
      'Recommended Age': '3+'
    },
    image: '/images/octopus.png',
    images: ['/images/octopus.png'],
    model: '/models/octopus.glb',
    category: 'Toys',
  },
  {
    id: 'bell',
    name: 'Brass Ship Bell',
    price: 89.99,
    description: 'This authentic Brass Ship Bell is a masterpiece of maritime craftsmanship. Cast from solid brass and polished to a brilliant mirror finish, it delivers a clear, resonant tone that commands attention.',
    features: [
      {
        title: 'Solid Brass Core',
        description: 'Cast from heavy-duty solid brass for authentic maritime durability.',
        icon: 'Anchor'
      },
      {
        title: 'Resonant Sound',
        description: 'Expertly tuned to produce a clear, long-lasting acoustic ring.',
        icon: 'Volume2'
      },
      {
        title: 'Mirror Finish',
        description: 'Triple-polished surface provides a stunning weather-resistant shine.',
        icon: 'Sun'
      },
      {
        title: 'Ready to Mount',
        description: 'Includes a heavy-duty bracket and handcrafted braided pull rope.',
        icon: 'Settings'
      }
    ],
    specs: {
      'Material': 'Solid Polished Brass',
      'Diameter': '6 inches',
      'Weight': '3.2 lbs',
      'Mounting': 'Wall-mount bracket included',
      'Origin': 'Traditional Maritime Forge'
    },
    image: '/images/bell.png',
    images: ['/images/bell.png'],
    model: '/models/bell.glb',
    category: 'Home',
  },
  {
    id: 'adidas-shoe',
    name: 'Adidas Ultraboost Shoe',
    price: 159.99,
    description: 'Experience the pinnacle of running technology with the Adidas Ultraboost. Engineered for ultimate energy return, these shoes feature the iconic Boost midsole that cushions every step.',
    features: [
      {
        title: 'Boost Velocity',
        description: 'Revolutionary midsole technology that captures and returns energy.',
        icon: 'Zap'
      },
      {
        title: 'Primeknit Frame',
        description: 'Adaptive textile upper that wraps the foot like a second skin.',
        icon: 'Wind'
      },
      {
        title: 'Continental Grip',
        description: 'High-performance rubber outsole for extraordinary traction.',
        icon: 'Navigation'
      },
      {
        title: 'Eco Innovation',
        description: 'Crafted with Primeblue high-performance recycled materials.',
        icon: 'Leaf'
      }
    ],
    specs: {
      'Weight': '11.1 oz (Size 9)',
      'Drop': '10 mm',
      'Arch Type': 'Neutral',
      'Closure': 'Lace closure',
      'Sustainability': '50% recycled upper'
    },
    image: '/images/adidas-shoe.png',
    images: [
      '/images/adidas-shoe.png',
      '/images/adidas-shoe-1.png',
      '/images/adidas-shoe-2.png',
      '/images/adidas-shoe-3.png',
      '/images/adidas-shoe-4.png'
    ],
    model: '/models/multi-image-Adidas-shoe.glb',
    category: 'Shoes',
  },
];


