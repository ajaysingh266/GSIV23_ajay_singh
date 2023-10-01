import { createSlice } from "@reduxjs/toolkit";
import { movieState } from "../initialState";

export const homeReducer = createSlice({
  name: "movie",
  initialState: movieState,
  reducers: {
    getMovies: (state: any, action: any) => {
      state.data = action.payload.data;
      state.total = action.payload.total_pages;
      state.page = action.payload.page;
    },
    updateMovies: (state, action) => {
      state.data = [...state.data, ...action.payload.data];
      state.total = action.payload.total_pages;
      state.page = action.payload.page + 1;
    },
  },
});
export const { getMovies, updateMovies } = homeReducer.actions;
export default homeReducer.reducer;
