import {Product} from './productsState';

interface FavoriteState {
  favorites: Product[];
  pending: boolean;
  error: any;
}
export type {FavoriteState};
