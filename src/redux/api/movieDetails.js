import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:";
const BASE_PORT = 3030;

const url = `${API_URL}${BASE_PORT}`;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      query: (movieId) => `/api/v1/movie/${movieId}`,
      transformResponse: async (response) => {
        const imageBlob = await fetch(response.poster).then((res) =>
          res.blob()
        );
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageBlob);
        await new Promise((resolve) => (fileReader.onload = resolve));
        const base64Image = fileReader.result;

        return {
          ...response,
          poster: base64Image,
        };
      },
    }),
  }),
});

export const { useGetMovieDetailsQuery, useGetMovieIdsQuery } = movieApi;
