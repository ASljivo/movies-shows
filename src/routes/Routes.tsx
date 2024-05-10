import { MovieDetails } from "components/pages/movies/MovieDetails";
import { TVShowsDetails } from "components/pages/tv-shows/TVShowsDetails";
import { TVShows } from "components/pages/tv-shows/TVShows";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "components/pages/movies/Movies";

import { MOVIES, MOVIE_DETAILS, SHOWS, SHOW_DETAILS } from "./routePaths";

export const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path={MOVIES} element={<Movies />} />
      <Route index path={MOVIE_DETAILS} element={<MovieDetails />} />
      <Route path={SHOWS} element={<TVShows />} />
      <Route path={SHOW_DETAILS} element={<TVShowsDetails />} />
      <Route path="*" element={<Movies />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
