import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import cartSlice from './Cart/CartSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  timeout: 100,
  key: 'cart',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
