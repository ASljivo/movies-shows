import { FC, useContext, useEffect, useState } from "react";
import { MediaModel } from "models/MediaResponse";
import HttpService from "services/HttpService";
import useApi from "utils/apiClient/useApi";
import { Loading } from "components/atoms/loading/Loading";

import { GlobalContext } from "context/globalContext";
import { PageContent } from "components/organisms/page-content/PageContent";

import { getTopTenData } from "helpers/helpers";

export const Movies: FC = () => {
  HttpService.category = "movie";
  const { fetch, isLoading } = useApi(HttpService.getTopRated);
  const { fetch: searchMovie, isLoading: isLoadingSearch } = useApi(
    HttpService.get
  );
  const [movies, setMovies] = useState<MediaModel[]>([]);
  const [dataLength, setDataLength] = useState<number>(1);
  const [hasPaggination, setHasPaggination] = useState<boolean>(false);
  const { moviesQuery, moviesPage, setMoviesQueryValue, setMoviesPageValue } =
    useContext(GlobalContext);

  const getTopRatedMovies = () => {
    fetch().then(({ data }) => {
      setMovies(getTopTenData(data.results));
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
    deatilsPage: "movie",
  };

  return <PageContent {...props} />;
};
