import { FC, useContext, useEffect, useState } from "react";
import { MovieModel } from "models/MoviesModel";
import MoviesService from "services/MoviesService";
import useApi from "utils/apiClient/useApi";
import { Loading } from "components/atoms/loading/Loading";

import { GlobalContext } from "context/globalContext";
import { PageContent } from "components/organisms/page-content/PageContent";

export const Movies: FC = () => {
  const { fetch, isLoading } = useApi(MoviesService.getTopRated);
  const { fetch: searchMovie, isLoading: isLoadingSearch } = useApi(
    MoviesService.get
  );
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [dataLength, setDataLength] = useState<number>(1);
  const [hasPaggination, setHasPaggination] = useState<boolean>(false);
  const { moviesQuery, moviesPage, setMoviesQueryValue, setMoviesPageValue } =
    useContext(GlobalContext);

  const getTopRatedMovies = () => {
    fetch().then(({ data }) => {
      setMovies(data.results.slice(0, 10));
      setHasPaggination(false);
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (moviesQuery.length < 3) {
        getTopRatedMovies();
      } else {
        searchMovies(moviesQuery, moviesPage);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [moviesQuery, moviesPage]);

  const searchMovies = (value: string, page: number) => {
    searchMovie(value, page).then(({ data }) => {
      setMovies(data.results);
      setDataLength(data.total_pages);
      setHasPaggination(data.total_pages > 1);
    });
  };

  const handleSearch = () => {
    setMoviesPageValue(1);
  };

  if (isLoading || isLoadingSearch) {
    return <Loading />;
  }
  const props = {
    query: moviesQuery,
    setQuery: setMoviesQueryValue,
    currentPage: moviesPage,
    setCurrentPage: setMoviesPageValue,
    data: movies,
    dataLength,
    handleSearch,
    hasPaggination,
  };

  return <>{movies.length > 0 && <PageContent {...props} />}</>;
};
