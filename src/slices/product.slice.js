import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.user = action.payload;
    },
    clearProduct: (state) => {
      state.user = null;
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
