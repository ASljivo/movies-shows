import "./style.css";
import { FC } from "react";
import { MovieModel } from "models/MoviesModel";
import { NavLink } from "react-router-dom";

interface Props {
  data: MovieModel[];
}
export const CardList: FC<Props> = ({ data }) => {
  const url = `${process.env.REACT_APP_ASSET_URL}w500/`;
  return (
    <div className="grid grid-2-col">
      {data.map((currentMovie) => {
        const { poster_path, id, title } = currentMovie;

        return (
          <NavLink className="link" to={`/movie/${id}`} key={id}>
            <div className="card">
              <div className="card-info">
                <img src={`${url}${poster_path}`} alt="Poster" />
                <h2>{title}</h2>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
