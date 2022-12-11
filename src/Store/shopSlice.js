import { createSlice } from "@reduxjs/toolkit";
import { Watches } from "./Watches";
const initialState = Watches;

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    filter(action, state) {},
  },
});

export default shopSlice;
export const shopActions = shopSlice.actions;
