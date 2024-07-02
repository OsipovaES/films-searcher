import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:";
const BASE_PORT = 3030;

const url = `${API_URL}${BASE_PORT}`;

export const movieListApi = createApi({
  reducerPath: "movieListApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (arg) => {
        const {
          title,
          genre,
          release_year,
          sort_by = "release_date",
          order = "desc",
          page = 1,
          limit = 10,
        } = arg || {};
        return {
          url: "/api/v1/search",
          params: { title, genre, release_year, sort_by, order, page, limit },
        };
      },
      transformResponse: async (response) => {
        return {
          movies: response.search_result,
          total: response.total_pages,
        };
      },
    }),
  }),
});

export const { useSearchMoviesQuery } = movieListApi;
