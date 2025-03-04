import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../models/data/userState';
import {getUserInfo} from '../actions/userActions';
const initialState: UserState = {
  user: null,
  pending: false,
  error: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});
export default userSlice.reducer;
