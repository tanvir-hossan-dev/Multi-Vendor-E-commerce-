import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { productApi } from "../features/product/productApi";
import userSlice from "../features/user/userSlice";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
    productApi: productApi,
  },
  middleware: (middleware) => middleware().concat(apiSlice.middleware),
});

export default Store;
