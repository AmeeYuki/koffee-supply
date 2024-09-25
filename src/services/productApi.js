import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";
// import { selectToken } from "../slices/auth.slice";

export const productAPI = createApi({
  reducerPath: "productManagement",
  tagTypes: ["ProductList"],
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
    getAllProduct: builder.query({
      query: () => `products`,
      providesTags: ["ProductList"],
    }),
  }),
});

export const { useGetAllProductQuery } = productAPI;
