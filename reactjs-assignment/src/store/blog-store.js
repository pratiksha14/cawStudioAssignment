import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: { blogData: [] },
  reducers: {
    setBlogData(state, action) {
      const { payload } = action;
      state.blogData = payload;
    }
  }
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;
