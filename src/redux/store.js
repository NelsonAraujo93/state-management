import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
