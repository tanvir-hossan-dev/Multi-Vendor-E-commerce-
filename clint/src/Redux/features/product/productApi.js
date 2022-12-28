import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/product/getproduct",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/addproduct",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/deleteproduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/product/updateproduct/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductQuery, useAddProductMutation, useDeleteProductMutation, useEditProductMutation } =
  productApi;
