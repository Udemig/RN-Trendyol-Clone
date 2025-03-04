interface Rating {
  count: number;
  rate: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
  isFavorite: boolean;
  quantity: 0;
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  populerProducts: Product[];
  product: Product;
  pending: boolean;
  error: any;
}
interface Params {
  id: number;
}
export type {ProductsState, Product, Params, Rating};
