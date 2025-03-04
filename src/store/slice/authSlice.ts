import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../models/data/authState';
import {userLogin, userLogOut} from '../actions/authActions';
const initialState: AuthState = {
  isLogin: false,
  user: null,
  pending: false,
  error: null,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkUser: (state, action) => {
      if (action?.payload) {
        state.isLogin = true;
        state.token = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.pending = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.pending = false;
        state.isLogin = true;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
        state.isLogin = false;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.isLogin = false;
        state.token = null;
      });
  },
});
export const {checkUser} = authSlice.actions;
export default authSlice.reducer;
