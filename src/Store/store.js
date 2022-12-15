import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import cartSlice from "./cartSlice";
import favoritesSlice from "./favoritesSlice";
const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
export default store;
