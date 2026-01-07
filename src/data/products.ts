export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  model: string;
}

export const products: Product[] = [
  {
    id: 'octopus',
    name: 'Blue Plush Octopus',
    price: 29.99,
    description: 'A cute and soft blue plush octopus, perfect for decoration or as a gift.',
    image: '/images/octopus.png',
    images: ['/images/octopus.png'],
    model: '/models/octopus.glb',
  },
  {
    id: 'bell',
    name: 'Brass Ship Bell',
    price: 89.99,
    description: 'A classic brass vessel bell with a resonant sound and elegant finish.',
    image: '/images/bell.png',
    images: ['/images/bell.png'],
    model: '/models/bell.glb',
  },
];


