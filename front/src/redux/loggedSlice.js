import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idLogged: " ",
  nameLogged: " ",
};

export const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.idLogged = action.payload.idLogged;
      state.nameLogged = action.payload.nameLogged;
    },

    unsetUser: (state) => {
      state.idLogged = " ";
      state.nameLogged = " ";
    },
  },
});

export const { setUser, unsetUser } = loggedSlice.actions;

export default loggedSlice.reducer;
