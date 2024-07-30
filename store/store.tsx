import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Cart/CartSlice';

export const store = () => {
  return configureStore({
    reducer: { cart: cartSlice },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
