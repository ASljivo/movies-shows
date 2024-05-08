import { MovieModel } from "models/MoviesModel";
import { FC } from "react";
export const Details: FC<MovieModel> = (movie) => {
  return (
    <div className="deatils">
      <p className="title">{movie.title}</p>

      <p className="label">Movie Overview</p>
      <p className="text">{movie.overview}</p>

      <p className="label">Genres</p>
      <p className="text">{movie?.genres?.map((item) => item.name + " ")}</p>

      <p className="label">Vote average</p>
      <p className="text">{movie?.vote_average}</p>

      <p className="label">Vote average</p>
      <p className="text">{movie?.release_date.replaceAll("-", " ")}</p>
    </div>
  );
};
