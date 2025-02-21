import { BlogType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteBlogs: BlogType[];
}

const initialState: FavoriteState = {
  favoriteBlogs: [],
};

export const favoriteBlogsSlice = createSlice({
  name: "favoriteBlogs",
  initialState,
  reducers: {
    addFavoriteBlog: (state, action: PayloadAction<BlogType>) => {
      state.favoriteBlogs.push(action.payload);
    },
    removeFavoriteBlog: (state, action: PayloadAction<string>) => {
      state.favoriteBlogs = state.favoriteBlogs.filter(
        (blog) => blog.id !== action.payload,
      );
    },
  },
});

export const { addFavoriteBlog, removeFavoriteBlog } =
  favoriteBlogsSlice.actions;

export default favoriteBlogsSlice.reducer;
