import { createSlice } from "@reduxjs/toolkit";
import { Watches } from "./Watches";
const initialState = { watches: Object.keys(Watches) };
const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    filter(action, state) {
      const brandsQueries = new URLSearchParams(location.search).getAll(
        "BRAND"
      );
      const priceQueries = new URLSearchParams(location.search).getAll("PRICE");
      const colorsQueries = new URLSearchParams(location.search).getAll(
        "COLOR"
      );
      const strapQueries = new URLSearchParams(location.search).getAll("STRAP");
      let filteredItems = [...state];
      brandsQueries.length &&
        (filteredItems = filteredItems.filter((item) =>
          brandsQueries.includes(Watches[item]["brand"])
        ));
      state = filteredItems;
    },
  },
});

export default shopSlice;
export const shopActions = shopSlice.actions;
