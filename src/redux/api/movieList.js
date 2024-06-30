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
        const movies = await Promise.all(
          response.search_result.map(async (movie) => {
            console.log("response :>> ", response);
            const imageBlob = await fetch(movie.poster).then((res) =>
              res.blob()
            );

            const base64Image = await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.readAsDataURL(imageBlob);
            });

            return {
              ...movie,
              poster: base64Image,
            };
          })
        );
        return {
          movies,
          total: response.total_pages,
        };
      },
    }),
  }),
});

export const { useSearchMoviesQuery } = movieListApi;
