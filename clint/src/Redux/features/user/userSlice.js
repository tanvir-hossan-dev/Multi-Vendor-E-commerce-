import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: undefined,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    userLogedOut: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
    },
  },
});

export const { userLoggedIn, userLogedOut } = userSlice.actions;

export default userSlice.reducer;
