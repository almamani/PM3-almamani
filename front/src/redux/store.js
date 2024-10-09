import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { appointmentsApi } from "./appointmentsApi";
import { userSlice } from "../redux/usersSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    userSlice: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      appointmentsApi.middleware
    ),
});
