import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentsApi = createApi({
  reducerPath: "appointmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/appointments/",
  }),
  endpoints: (builder) => ({
    cancelAppointment: builder.mutation({
      query: (id) => ({
        url: `cancel`,
        method: "PUT",
        body: { id },
      }),
    }),

    newAppointment: builder.mutation({
      query: (dataAppointment) => ({
        url: "schedule",
        method: "POST",
        body: dataAppointment,
      }),
    }),
  }),
});

export const { useCancelAppointmentMutation, useNewAppointmentMutation } =
  appointmentsApi;
