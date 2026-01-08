export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
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
    description: 'Transform your space with this charming Blue Plush Octopus. Crafted with premium, ultra-soft materials, this plushie is designed for both comfort and aesthetic appeal. Whether you are looking for a cuddly companion or a unique decorative piece, this octopus brings a touch of oceanic wonder to any room. Its vibrant blue hue and friendly expression make it a favorite for all ages.',
    features: [
      'Ultra-soft plush fabric for maximum comfort',
      'Realistic eight-tentacle design',
      'Child-safe embroidered eyes',
      'Perfect size for hugging or shelf display',
      'Hypoallergenic filling'
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
    description: 'This authentic Brass Ship Bell is a masterpiece of maritime craftsmanship. Cast from solid brass and polished to a brilliant mirror finish, it delivers a clear, resonant tone that commands attention. Ideal for marine enthusiasts, home bars, or as a classic front door bell, it combines historical charm with functional durability. It comes complete with a sturdy wall bracket and a handcrafted braided rope pull.',
    features: [
      'Solid cast brass construction',
      'Loud, clear resonant sound',
      'Weather-resistant polished finish',
      'Hand-braided cotton lanyard',
      'Includes mounting hardware'
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
    description: 'Experience the pinnacle of running technology with the Adidas Ultraboost. Engineered for ultimate energy return, these shoes feature the iconic Boost midsole that cushions every step. The Primeknit+ upper wraps the foot in a supportive, sock-like fit that adapts to your movement. Whether you are training for a marathon or navigating the city streets, the Ultraboost delivers unmatched comfort and style.',
    features: [
      'Revolutionary Boost midsole for energy return',
      'Primeknit+ adaptive textile upper',
      'Continental™ Rubber outsole for superior grip',
      'Torsion System for midfoot integrity',
      'Made with recycled Primeblue materials'
    ],
    specs: {
      'Weight': '11.1 oz (Size 9)',
      'Drop': '10 mm',
      'Arch Type': 'Neutral',
      'Closure': 'Lace closure',
      'Sustainability': '50% recycled upper'
    },
    image: '/images/adidas-shoe.png',
    images: ['/images/adidas-shoe.png'],
    model: '/models/adidas-shoe.glb',
    category: 'Shoes',
  },
];


