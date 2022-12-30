import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Root-Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://multi-vendor-ecommerce-server1.onrender.com/api/v1",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.user?.accessToken;

      if (token) headers.set("authorization", token);

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
