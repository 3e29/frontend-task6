import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
