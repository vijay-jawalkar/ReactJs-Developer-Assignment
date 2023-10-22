import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "Filter",
  initialState: {
    productList: [],
    sortBy: null,
    category: null,
    initialList: [],
  },
  reducers: {
    initialProductList: function (state, action) {
      const updatedProductList = action.payload;
      return {
        productList: updatedProductList,
        initialList: updatedProductList,
      };
    },

    setSortBy: function (state, action) {
      state.sortBy = action.payload;

      if (state.sortBy === "lowtohigh") {
        state.productList = [...state.productList].sort(
          (a, b) => a.price - b.price
        );
      }

      if (state.sortBy === "hightolow") {
        state.productList = [...state.productList].sort(
          (a, b) => b.price - a.price
        );
      }
    },

    categories: function (state, action) {
      state.category = action.payload;

      if (state.category === "men's clothing") {
        state.productList = state.initialList;
        state.productList = state.productList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "women's clothing") {
        state.productList = state.initialList;
        state.productList = state.productList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "jewelery") {
        state.productList = state.initialList;
        state.productList = state.productList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "electronics") {
        state.productList = state.initialList;
        state.productList = state.productList.filter(
          (item) => item.category === state.category
        );
      }
    },

    initialProducts: function (state) {
      state.productList = state.initialList;
    },
  },
});

export const { initialProductList, setSortBy, categories, initialProducts } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
