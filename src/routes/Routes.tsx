import { MovieDetails } from "components/pages/movies/MovieDetails";
import { ShowDetails } from "components/pages/shows/ShowDetails";
import { Shows } from "components/pages/shows/Shows";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "components/pages/movies/Movies";

import { MOVIES, MOVIE_DETAILS, SHOWS, SHOW_DETAILS } from "./routePaths";

export const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path={MOVIES} element={<Movies />} />
      <Route index path={MOVIE_DETAILS} element={<MovieDetails />} />
      <Route path={SHOWS} element={<Shows />} />
      <Route path={SHOW_DETAILS} element={<ShowDetails />} />
      <Route path="*" element={<Movies />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
