import { IDataFood } from '@/model/foodModel';
import { createSlice } from '@reduxjs/toolkit';

interface InitCart {
  items: IDataFood[];
  totalQuantity: number;
  finalPrice: number;
}

const initCart: InitCart = {
  items: [],
  totalQuantity: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const checkingItem = state.items.find(
        (item) => item.foodId === newItem.foodId
      );

      state.totalQuantity++;
      if (!checkingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.finalPrice = state.finalPrice + newItem.price;
      } else {
        checkingItem.quantity++;
        checkingItem.totalPrice = checkingItem.totalPrice + newItem.price;
        state.finalPrice = state.finalPrice + newItem.price;
      }
    },
    deleteItem(state, action) {
      const foodId = action.payload;
      const checkingItem = state.items.find((item) => item.foodId === foodId);
      if (checkingItem) {
        if (checkingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.foodId !== foodId);
        } else {
          checkingItem.quantity--;
          checkingItem.totalPrice =
            (checkingItem.totalPrice ?? 0) - Number(checkingItem.price);
        }
        state.totalQuantity--;
        state.finalPrice = state.finalPrice - Number(checkingItem.price);
      }
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
