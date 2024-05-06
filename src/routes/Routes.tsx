import { MovieDetails } from "components/pages/movies/MovieDetails";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "../components/pages/movies/Movies";

import { Shows } from "../components/pages/shows/shows";
import { MOVIES, MOVIES_DETAILS, SHOWS } from "./routePaths";

export const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path={MOVIES} element={<Movies />} />
      <Route index path={MOVIES_DETAILS} element={<MovieDetails />} />
      <Route path={SHOWS} element={<Shows />} />

      <Route path="*" element={<Movies />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
