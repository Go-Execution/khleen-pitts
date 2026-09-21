export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
  ingredients?: string;
  howToUse?: string;
}

export const products: Product[] = [
  {
    id: 'lorem-cream-silver',
    name: 'Lorem Ipsum Silver Cream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 24.99,
    image: '/products/product-1.jpeg',
    category: 'Cream',
    isBestSeller: true,
    ingredients: 'Lorem ipsum, dolor sit amet, consectetur, adipiscing elit, sed do, eiusmod, tempor, incididunt, ut labore.',
    howToUse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apply a small amount to clean, dry skin. Rub in gently until fully absorbed.'
  },
  {
    id: 'ipsum-cream-gold',
    name: 'Ipsum Dolor Gold Cream',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 29.99,
    image: '/products/product-6.jpeg',
    category: 'Cream',
    isBestSeller: true,
    ingredients: 'Duis aute irure, dolor in reprehenderit, in voluptate velit, esse cillum dolore, eu fugiat nulla pariatur.',
    howToUse: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Take a pea-sized amount and apply daily for best results.'
  },
  {
    id: 'amet-deodorant-bundle',
    name: 'Amet Consectetur Bundle',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    price: 45.00,
    image: '/products/product-2.jpeg',
    category: 'Bundle',
    isBestSeller: false,
    ingredients: 'Sed ut perspiciatis, unde omnis iste, natus error sit, voluptatem, accusantium doloremque.',
    howToUse: 'Use both creams alternately. Apply silver cream in the morning and gold cream in the evening.'
  },
  {
    id: 'elit-fresh-cream',
    name: 'Elit Freshness Cream',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.',
    price: 22.50,
    image: '/products/product-3.jpeg',
    category: 'Cream',
    isBestSeller: false,
    ingredients: 'Nemo enim ipsam, voluptatem quia, voluptas sit aspernatur, aut odit aut fugit.',
    howToUse: 'Apply a thin layer as needed throughout the day.'
  },
  {
    id: 'tempor-trial-kit',
    name: 'Tempor Trial Kit',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    price: 15.00,
    image: '/products/product-4.jpeg',
    category: 'Kit',
    isBestSeller: true,
    ingredients: 'Ut enim ad minima, veniam quis, nostrum exercitationem, ullam corporis.',
    howToUse: 'Perfect for travel or trying out our formulas. Use as directed on individual packages.'
  },
  {
    id: 'magna-daily-cream',
    name: 'Magna Daily Cream',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    price: 25.00,
    image: '/products/product-5.jpeg',
    category: 'Cream',
    isBestSeller: false,
    ingredients: 'At vero eos, et accusamus et iusto, odio dignissimos, ducimus qui blanditiis.',
    howToUse: 'Apply to clean, dry underarms daily.'
  },
  {
    id: 'aliqua-night-cream',
    name: 'Aliqua Night Cream',
    description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.',
    price: 28.00,
    image: '/products/product-7.jpeg',
    category: 'Cream',
    isBestSeller: false,
    ingredients: 'Similique sunt, in culpa qui, officia deserunt, mollitia animi, id est laborum.',
    howToUse: 'Apply before bed for overnight repair and protection.'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
