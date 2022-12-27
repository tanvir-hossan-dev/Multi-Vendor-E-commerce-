import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/product/getproduct",
    }),
  }),
});

export const { useGetProductQuery } = productApi;
