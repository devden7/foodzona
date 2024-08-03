import { IDataFood } from '@/model/foodModel';
import { createSlice } from '@reduxjs/toolkit';

interface InitCart {
  items: IDataFood[];
  totalQuantity: number;
  calcPriceItem: number;
}

const initCart: InitCart = {
  items: [],
  totalQuantity: 0,
  calcPriceItem: 0,
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
        });
        state.calcPriceItem = state.calcPriceItem + newItem.price;
      } else {
        checkingItem.quantity++;
        state.calcPriceItem = state.calcPriceItem + newItem.price;
      }
    },
    deleteItem(state, action) {
      const foodId = action.payload;
      const checkingItem = state.items.find((item) => item.foodId === foodId);
      state.totalQuantity--;
      state.calcPriceItem = state.calcPriceItem - Number(checkingItem?.price);
      if (checkingItem) {
        if (checkingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.foodId !== foodId);
        } else {
          checkingItem.quantity--;
        }
      }
    },
    resetCart(state) {
      return (state = initCart);
    },
  },
});

export const { addItem, deleteItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
