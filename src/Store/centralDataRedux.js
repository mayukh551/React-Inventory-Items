import { createSlice, configureStore } from "@reduxjs/toolkit";
import itemData from "./itemData.json";

const initialItemState = [...itemData];

const itemSlice = createSlice({
  name: "items",
  initialState: initialItemState,
  reducers: {
    addItem(state, action) {
      state.unshift(action.payload);
    },
    update(state, action) {
      // return state.filter((element) => element.name !== action.payload);
      return action.payload;
    },
    updateList(state, action) {
      var itemIndex = state.findIndex(
        (element) => element.id === action.payload.id
      );
      state[itemIndex] = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { items: itemSlice.reducer },
});

export const itemSliceActions = itemSlice.actions;
export default store;
