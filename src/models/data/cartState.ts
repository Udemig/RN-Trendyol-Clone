import {Product} from './productsState';

interface CartState {
  cart: Product[];
  totalPrice: number;
}

export type {CartState};
