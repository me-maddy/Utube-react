import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "vdeo",
  initialState: {
    popularVideos: [],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { addPopularVideos } = videoSlice.actions;
