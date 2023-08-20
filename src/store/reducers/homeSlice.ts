import { createSlice } from "@reduxjs/toolkit";
import { homeState } from "../initialState";

export const homeReducer = createSlice({
  name: "home",
  initialState: homeState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});
export const { getApiConfiguration, getGenres } = homeReducer.actions;
export default homeReducer.reducer;
