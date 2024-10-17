import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";

export const orderApi = createApi({
  reducerPath: "orderManagement",
  tagTypes: ["OrderList", "OrderDetails"], // Add OrderDetails for individual orders
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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
      invalidatesTags: ["OrderList"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `orders/${orderId}`,
        method: "PUT",
        body: { orderStatus: orderStatus },
      }),
      invalidatesTags: ["OrderList", { type: "OrderDetails", id: "orderId" }],
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
} = orderApi;
