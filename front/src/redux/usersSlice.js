import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: {},
};

export const userSlice = createSlice({
  name: "userSlice",

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.login = action.payload.login;
      state.user = action.payload.user;
    },

    unsetUser: (state) => {
      state.login = false;
      state.user = {};
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;
