import "./style.css";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab as TabModel } from "models/Tab";

export const Tab: FC<TabModel> = ({ name, path }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button
      key={path}
      onClick={() => navigate(path)}
      className={path === pathname ? "active" : ""}
    >
      {name}
    </button>
  );
};
