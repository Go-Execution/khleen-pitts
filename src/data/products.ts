export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 'signature-stick',
    name: 'Signature Stick',
    description: 'Our award-winning Signature Scent in a convenient, eco-friendly stick. Long-lasting odor protection with a subtle blend of botanical extracts.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
    category: 'Deodorant',
    isBestSeller: true
  },
  {
    id: 'botanical-cream',
    name: 'Botanical Cream',
    description: 'A luxurious cream deodorant formulated for sensitive skin. Glides on smoothly and absorbs quickly without residue.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500',
    category: 'Cream',
    isBestSeller: true
  },
  {
    id: 'fresh-mist',
    name: 'Fresh Mist',
    description: 'A cooling, revitalizing mist deodorant. Perfect for a quick refresh after a workout or on a hot day.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500',
    category: 'Spray',
    isBestSeller: true
  },
  {
    id: 'lavender-stick',
    name: 'Lavender Stick',
    description: 'Calming lavender essential oil blended into our reliable odor-fighting stick formula.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
    category: 'Deodorant'
  },
  {
    id: 'citrus-cream',
    name: 'Citrus Cream',
    description: 'Bright, uplifting citrus notes in a gentle cream base.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500',
    category: 'Cream'
  },
  {
    id: 'unscented-stick',
    name: 'Unscented Stick',
    description: 'Pure, unscented protection for the most sensitive skin.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
    category: 'Deodorant'
  },
  {
    id: 'rose-mist',
    name: 'Rose Mist',
    description: 'A delicate rosewater-infused spray that neutralizes odor while soothing the skin.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500',
    category: 'Spray'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
