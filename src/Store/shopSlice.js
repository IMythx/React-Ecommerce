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
      const brandsFilters = new URLSearchParams(location.search).getAll(
        "BRAND"
      );
      const priceFilters =
        new URLSearchParams(location.search).getAll("PRICE").length &&
        new URLSearchParams(location.search).getAll("PRICE")[0].split("-");
      const colorsFilters = new URLSearchParams(location.search).getAll(
        "COLOR"
      );
      const strapFilters = new URLSearchParams(location.search).getAll("STRAP");
      let filteredItems = [...initialState.watches];

      brandsFilters.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            brandsFilters.indexOf(Watches[item]["brand"].toUpperCase()) !== -1
        ));

      priceFilters.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            +Watches[item]["price"] >= +priceFilters[0] &&
            +Watches[item]["price"] <= +priceFilters[1]
        ));

      colorsFilters.length &&
        (filteredItems = filteredItems.filter(
          (item) => colorsFilterHelper(colorsFilters, item) !== false
        ));

      strapFilters.length &&
        (filteredItems = filteredItems.filter(
          (item) =>
            strapFilters.indexOf(
              Watches[item]["Strap Material"].toUpperCase()
            ) !== -1
        ));

      state.watches = filteredItems;
    },
  },
});

export default shopSlice;
export const shopActions = shopSlice.actions;
