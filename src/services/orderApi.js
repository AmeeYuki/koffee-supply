import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";
// import { selectToken } from "../slices/auth.slice";

export const orderAPI = createApi({
  reducerPath: "orderManagement",
  tagTypes: ["OrderList"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = selectToken(getState());
    //   if (token) {
    //     headers.append("Authorization", `Bearer ${token}`);
    //   }
    //   headers.append("Content-Type", "application/json");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => `orders`,
      providesTags: ["OrderList"],
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: `orders`,
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["OrderList"], // Invalidate the order list to refetch after creating a new order
    }),
  }),
});

export const { useGetAllOrderQuery, useCreateOrderMutation } = orderAPI;
