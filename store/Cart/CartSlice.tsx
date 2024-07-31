import { IDataFood } from '@/model/foodModel';
import { createSlice } from '@reduxjs/toolkit';

interface InitCart {
  items: IDataFood[];
  totalQuantity: number;
}

const initCart: InitCart = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {
    addItem(state, action) {
      state.items?.push(action.payload);
    },
    deleteItem(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
