import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;

        try {
          localStorage.setItem(
            "Ecommerce-Auth",
            JSON.stringify({ accessToken: result.data.accessToken, user: result.data.user })
          );
          dispatch(userLoggedIn({ accessToken: result.data.accessToken, user: result.data.user }));
        } catch (err) {}
      },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;

        try {
          localStorage.setItem(
            "Ecommerce-Auth",
            JSON.stringify({ accessToken: result.data.accessToken, user: result.data.user })
          );
          dispatch(userLoggedIn({ accessToken: result.data.accessToken, user: result.data.user }));
        } catch (err) {}
      },
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
