import {createSlice} from '@reduxjs/toolkit';
import {FavoriteState} from '../../models/data/favoriteState';

const initialState: FavoriteState = {
  favorites: [],
  pending: false,
  error: null,
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const exitingProduct = state.favorites.find(
        item => item.id === product.id,
      );
      if (exitingProduct) {
        exitingProduct.isFavorite = false;
        state.favorites = state.favorites.filter(
          item => item.id !== action.payload.id,
        );
      } else {
        state.favorites.push({...product, isFavorite: true});
      }
    },
  },
});
export const {addFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
