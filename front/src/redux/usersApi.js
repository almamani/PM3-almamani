import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/users/" }),
  endpoints: (builder) => ({
    userAppointments: builder.query({
      query: (id) => `${id}`,
    }),

    userLogin: builder.mutation({
      query: (dataUser) => ({
        url: "login",
        method: "POST",
        body: dataUser,
      }),
    }),
  }),
});

export const { useUserAppointmentsQuery, useUserLoginMutation } = usersApi;
