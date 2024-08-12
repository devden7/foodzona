import { createSlice } from '@reduxjs/toolkit';

const location = {
  city: 'jakarta',
};
const locationSlice = createSlice({
  name: 'location',
  initialState: location,
  reducers: {
    changeLocation(state, action) {
      state.city = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;

export default locationSlice.reducer;
