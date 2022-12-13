import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: { shop: shopSlice.reducer, cart: cartSlice.reducer },
});
export default store;
