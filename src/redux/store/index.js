import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../api/movieDetails";
import { movieListApi } from "../api/movieList";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [movieListApi.reducerPath]: movieListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, movieListApi.middleware),
});
