import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

export const productSlice = createSlice({
  name: "Proudct Slice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.card.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
