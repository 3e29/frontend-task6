import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostState } from "../../misc/types";
import data from "../../assets/data/data.json";
import { postImages, sectionImages } from "../../assets/data/images";

const initialState: PostState = {
  posts: data,
  mainImages: postImages,
  secImages: sectionImages,
  page: 1,
  pages: Math.ceil(data.slice(4).length / 6),
  visiblePosts: data.slice(4, 10),
};

const cakeSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      const page = action.payload;
      const startPoints = (page - 1) * 6 + 4;
      state.page = page;
      state.visiblePosts = state.posts.slice(startPoints, startPoints + 6);
    },
    prevPage(state) {
      const newPage = state.page - 1 >= 1 ? state.page - 1 : 1;
      const startPoints = (newPage - 1) * 6 + 4;
      state.page = newPage;
      state.visiblePosts = state.posts.slice(startPoints, startPoints + 6);
    },
    nextPage(state) {
      const newPage =
        state.page + 1 <= state.pages ? state.page + 1 : state.pages;
      const startPoints = (newPage - 1) * 6 + 4;
      state.page = newPage;
      state.visiblePosts = state.posts.slice(startPoints, startPoints + 6);
    },
  },
});

export default cakeSlice.reducer;
export const { setPage, prevPage, nextPage } = cakeSlice.actions;
