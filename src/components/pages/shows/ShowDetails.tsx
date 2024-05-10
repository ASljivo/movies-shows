import { Loading } from "components/atoms/loading/Loading";
import { PageDetails } from "components/organisms/page-details/PageDeatils";
import { MediaModel } from "models/MediaResponse";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HttpService from "services/HttpService";
import useApi from "utils/apiClient/useApi";
import { MEDIA_INIT } from "utils/constants";

export const ShowDetails: FC = () => {
  HttpService.category = "tv";
  const { id } = useParams();
  const { fetch, isLoading } = useApi(HttpService.getById);
  const [movie, setMovie] = useState<MediaModel>(MEDIA_INIT);

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
