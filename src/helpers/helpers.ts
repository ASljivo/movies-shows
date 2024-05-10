import { MediaModel } from "models/MediaResponse";

export const dateTransform = (date: string) => {
  return date.replaceAll("-", " ");
};

export const getTopTenData = (data: MediaModel[]): MediaModel[] => {
  if (data.length < 10) {
    return data;
  }
  return data.slice(0, 10);
};
