import "./style.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Movies & TV Shows</h1>
    </header>
  );
};
