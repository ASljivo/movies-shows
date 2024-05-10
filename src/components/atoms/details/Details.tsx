import { dateTransform } from "helpers/helpers";
import { MediaModel } from "models/MediaResponse";
import { FC } from "react";

export const Details: FC<MediaModel> = (movie) => {
  return (
    <div className="deatils">
      <p className="title">{movie.title || movie.original_name}</p>

      <p className="label">Movie Overview</p>
      <p className="text">{movie.overview}</p>

      <p className="label">Genres</p>
      <p className="text">{movie?.genres?.map((item) => item.name + " ")}</p>

      <p className="label">Type</p>
      <p className="text">{movie?.type}</p>

      <p className="label">Vote average</p>
      <p className="text">{movie?.vote_average}</p>

      <p className="label">Popularity</p>
      <p className="text">{movie?.popularity}</p>

      {movie?.release_date && (
        <>
          <p className="label">Release date</p>
          <p className="text">{dateTransform(movie?.release_date)}</p>
        </>
      )}

      {movie?.number_of_episodes && (
        <>
          <p className="label">Number episodes</p>
          <p className="text">{movie?.number_of_episodes}</p>
        </>
      )}

      {movie?.number_of_seasons && (
        <>
          <p className="label">Number seasons</p>
          <p className="text">{movie?.number_of_seasons}</p>
        </>
      )}
    </div>
  );
};
