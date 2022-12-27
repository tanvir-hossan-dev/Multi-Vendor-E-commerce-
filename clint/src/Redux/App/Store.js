import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import userSlice from "../features/user/userSlice";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (middleware) => middleware().concat(apiSlice.middleware),
});

export default Store;
