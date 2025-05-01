import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    selectedFilter: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      if (state.selectedFilter !== action.payload) {
        state.selectedFilter = action.payload;
      }
    },
  },
});

export const { changeFilter } = videoSlice.actions;
export default videoSlice.reducer;
