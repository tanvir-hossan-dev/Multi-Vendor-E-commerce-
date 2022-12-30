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
    deleteProduct: (state, action) => {
      console.log(action.payload);
      state.card = state.card.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
