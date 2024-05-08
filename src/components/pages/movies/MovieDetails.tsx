import { Loading } from "components/atoms/loading/Loading";
import { PageDetails } from "components/organisms/page-details/PageDeatils";
import { MovieModel } from "models/MoviesModel";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesService from "services/MoviesService";
import useApi from "utils/apiClient/useApi";
import { MOVIE_INIT } from "utils/constants";

export const MovieDetails: FC = () => {
  const { id } = useParams();
  const { fetch, isLoading } = useApi(MoviesService.getById);
  const [movie, setMovie] = useState<MovieModel>(MOVIE_INIT);

  const getMovie = () => {
    fetch(id).then(({ data }) => {
      setMovie(data);
    });
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <PageDetails {...movie} />;
};
