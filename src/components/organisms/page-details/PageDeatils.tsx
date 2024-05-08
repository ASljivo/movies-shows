import { BackButton } from "components/atoms/back-button/BackButton";
import { Details } from "components/atoms/details/Details";
import { VideoPlayer } from "components/atoms/video-player/VideoPlayer";
import { MovieModel } from "models/MoviesModel";
import { FC } from "react";

export const PageDetails: FC<MovieModel> = (movie) => {
  const url = `${process.env.REACT_APP_ASSET_URL}original/`;
  return (
    <section>
      <BackButton />

      {movie?.videos?.results[0] ? (
        <VideoPlayer videoKey={movie?.videos?.results[0]?.key} />
      ) : (
        <img src={`${url}${movie.poster_path}`} alt="Poster" />
      )}

      <Details {...movie} />
    </section>
  );
};
