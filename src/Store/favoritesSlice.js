import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addItem(state, action) {
      if (state.favorites.indexOf(action.payload.name) === -1) {
        state.favorites.push(action.payload.name);
      }
    },

    removeItem(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload.name
      );
    },
  },
});

export default favoritesSlice;
export const favoritesActions = favoritesSlice.actions;
