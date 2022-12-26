import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { userApi } from "../features/user/userApi";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userApi.reducer,
  },
  middleware: (middleware) => middleware().concat(apiSlice.middleware),
});

export default Store;
