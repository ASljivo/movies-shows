import { FC, useEffect, useState } from "react";
import { MovieModel } from "models/MoviesModel";
import MoviesService from "services/MoviesService";
import useApi from "utils/apiClient/useApi";
import { NavLink } from "react-router-dom";
import { Loading } from "components/atoms/loading/Loading";

export const Movies: FC = () => {
  const { fetch, isLoading } = useApi(MoviesService.getTopRated);

  const [movies, setMovies] = useState<MovieModel[]>([]);

  const getMovies = () => {
    fetch().then(({ data }) => {
      setMovies(data.results.slice(0, 10));
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section>
        <div className="grid grid-2-col">
          {movies.map((currentMovie) => {
            const { poster_path, id, title } = currentMovie;

            return (
              <NavLink to={`movie/${id}`} key={id}>
                <div className="card">
                  <div className="card-info">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt="Poster"
                    />
                    <h2>{title}</h2>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};
