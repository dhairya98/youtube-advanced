import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    selectedFilter: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      const current = state.selectedFilter;
      const next = action.payload;

      console.log("Filter changed to:", next, current);
      if (current !== next) {
        state.selectedFilter = next;
      }
    },
  },
});

export const { changeFilter } = videoSlice.actions;
export default videoSlice.reducer;
