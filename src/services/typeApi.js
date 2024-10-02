import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";
// import { selectToken } from "../slices/auth.slice";

export const typeAPI = createApi({
  reducerPath: "typeManagement",
  tagTypes: ["TypeList"],
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
    getTypes: builder.query({
      query: () => `types`,
      providesTags: ["TypeList"],
    }),
  }),
});

export const { useGetTypesQuery } = typeAPI;
