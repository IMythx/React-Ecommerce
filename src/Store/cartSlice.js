import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], totalPrice: 0 },
  reducers: {
    addItem(state, action) {
      state.totalPrice = state.totalPrice + action.payload.price;
      if (state.cart.indexOf(action.payload.name) === -1) {
        state.cart.push(action.payload.name);
      }
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item !== action.payload.name);
      state.totalPrice = state.totalPrice - action.payload.price;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
