// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchQuery: "", // Từ khóa tìm kiếm
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Lưu danh sách sản phẩm
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Lưu từ khóa tìm kiếm
    },
  },
});

export const { setProducts, setSearchQuery } = productSlice.actions;

export default productSlice.reducer;
