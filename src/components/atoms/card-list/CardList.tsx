import "./style.css";
import { FC } from "react";
import { MediaModel } from "models/MediaResponse";
import { NavLink } from "react-router-dom";

interface Props {
  data: MediaModel[];
  deatilsPage: string;
}
export const CardList: FC<Props> = ({ data, deatilsPage }) => {
  const url = `${process.env.REACT_APP_ASSET_URL}w500/`;
  return (
    <div className="grid grid-2-col">
      {data &&
        data.map((currentMovie) => {
          const { poster_path, id, title, original_name } = currentMovie;

          return (
            <NavLink className="link" to={`/${deatilsPage}/${id}`} key={id}>
              <div className="card">
                <div className="card-info">
                  {poster_path ? (
                    <img src={`${url}${poster_path}`} alt="Poster" />
                  ) : (
                    <img src="/cover-placeholder.png" alt="Poster" />
                  )}

                  <h2>{title || original_name}</h2>
                </div>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
};
