import { BackButton } from "components/atoms/back-button/BackButton";
import { Loading } from "components/atoms/loading/Loading";
import { MovieModel } from "models/MoviesModel";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesService from "services/MoviesService";
import useApi from "utils/apiClient/useApi";
import { MOVIE_INIT } from "utils/constants";

export const MovieDetails: FC = () => {
  const { id } = useParams();
  const { fetch, isLoading } = useApi(MoviesService.get);
  const [movie, setMovie] = useState<MovieModel>(MOVIE_INIT);

  const getMovie = () => {
    fetch(id).then(({ data }) => {
      setMovie(data);
    });
  };
  useEffect(() => {
    getMovie();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {movie && !isLoading && (
        <section>
          <BackButton />

          {movie.video ? (
            <video controls width="100%">
              <source
                src={`https://image.tmdb.org/t/p/original/${movie.video}`}
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Poster"
            />
          )}

          <div className="deatils">
            <p className="title">{movie.title}</p>

            <p className="label">Movie Overview</p>
            <p className="text">{movie.overview}</p>

            <p className="label">Genres</p>
            <p className="text">
              {movie?.genres?.map((item) => item.name + " ")}
            </p>

            <p className="label">Vote average</p>
            <p className="text">{movie?.vote_average}</p>

            <p className="label">Vote average</p>
            <p className="text">{movie?.release_date.replaceAll("-", " ")}</p>
          </div>
        </section>
      )}
    </>
  );
};
