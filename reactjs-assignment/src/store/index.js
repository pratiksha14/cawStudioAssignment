import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./blog-store";

const store = configureStore({
  reducer: { blogs: blogReducer }
});

export default store;
