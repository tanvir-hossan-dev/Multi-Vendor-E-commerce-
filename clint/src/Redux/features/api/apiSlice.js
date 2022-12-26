import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Root-Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
  }),
  endpoints: (builder) => ({}),
});
