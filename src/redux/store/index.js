import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../api/movieDetails";
import { movieListApi } from "../api/movieList";
import { searchSlice } from "../slices/search";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, movieListApi.middleware),
});
