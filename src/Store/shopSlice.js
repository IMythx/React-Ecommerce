import { createSlice } from "@reduxjs/toolkit";
import { Watches } from "./Watches";

const colorsFilterHelper = (filters = [], item) => {
  let matches = false;
  Watches[item]["color"].forEach((color) => {
    if (filters.indexOf(color.toUpperCase()) !== -1) {
      matches = true;
    }
  });
  return matches;
};
const initialState = { watches: Object.keys(Watches) };
const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    filter(state, action) {
      const brandsQueries = new URLSearchParams(location.search).getAll(
        "BRAND"
      );
      const priceQueries =
        new URLSearchParams(location.search).getAll("PRICE").length &&
        new URLSearchParams(location.search).getAll("PRICE")[0].split("-");
      const colorsQueries = new URLSearchParams(location.search).getAll(
        "COLOR"
      );
      const strapQueries = new URLSearchParams(location.search).getAll("STRAP");
      let filteredItems = [...initialState.watches];

      brandsQueries.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            brandsQueries.indexOf(Watches[item]["brand"].toUpperCase()) !== -1
        ));

      priceQueries.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            +Watches[item]["price"] >= +priceQueries[0] &&
            +Watches[item]["price"] <= +priceQueries[1]
        ));

      colorsQueries.length &&
        (filteredItems = filteredItems.filter(
          (item) => colorsFilterHelper(colorsQueries, item) !== false
        ));

      strapQueries.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            strapQueries.indexOf(
              Watches[item]["Strap Material"].toUpperCase()
            ) !== -1
        ));

      state.watches = filteredItems;
    },
  },
});

export default shopSlice;
export const shopActions = shopSlice.actions;
