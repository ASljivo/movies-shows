import { FC, useEffect, useState } from "react";
import { MovieModel } from "models/MoviesModel";
import MoviesService from "services/MoviesService";
import useApi from "utils/apiClient/useApi";
import { NavLink } from "react-router-dom";
import { Loading } from "components/atoms/loading/Loading";
import { Tabs } from "components/molecules/tabs/Tabs";
import Search from "components/atoms/search/Search";
import { useGlobalContext } from "context/globalContext";

export const Movies: FC = () => {
  const { fetch, isLoading } = useApi(MoviesService.getTopRated);
  const { fetch: searchMovie, isLoading: isLoadingSearch } = useApi(
    MoviesService.get
  );
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const { moviesQuery, setMoviesQueryValue } = useGlobalContext();

  const handleSearch = (value: string) => {
    if (value) {
      searchMovie(value, page).then(({ data }) => {
        setMovies(data.results);
      });
    }
  };

  const getMovies = () => {
    fetch().then(({ data }) => {
      setMovies(data.results.slice(0, 10));
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading || isLoadingSearch) {
    return <Loading />;
  }
  return (
    <>
      <Tabs />
      <Search
        value={moviesQuery}
        setValue={setMoviesQueryValue}
        onSearch={handleSearch}
      />
      <section>
        <div className="grid grid-2-col">
          {movies.map((currentMovie) => {
            const { poster_path, id, title } = currentMovie;

            return (
              <NavLink to={`/movie/${id}`} key={id}>
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
