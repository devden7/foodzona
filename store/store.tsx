import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import cartSlice from './Cart/CartSlice';
import storage from 'redux-persist/lib/storage';
import LocationSlice from './Location/LocationSlice';

const persistConfig = {
  timeout: 100,
  key: 'root',
  storage,
  whitelist: ['cart', 'location'],
};
const rootReducer = combineReducers({
  cart: cartSlice,
  location: LocationSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
