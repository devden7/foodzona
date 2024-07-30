import { createSlice } from '@reduxjs/toolkit';

interface InitCart {
  items: any[];
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
    addItem(state, action) {},
    deleteItem(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
