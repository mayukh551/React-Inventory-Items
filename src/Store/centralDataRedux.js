import { createSlice, configureStore } from "@reduxjs/toolkit";
import itemData from "./itemData.json";

const initialState = [...itemData];

const itemSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state = [...state, action.payload];
    },
    update(state) {
      state = [...state];
    },
  },
});

const store = configureStore({
  reducer: { items: itemSlice.reducer },
});

export const itemSliceActions = itemSlice.actions;
export default store;
