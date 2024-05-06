import "./style.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div
        className="back-button"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <div className="arrow-wrap">
          <span className="arrow-part-1"></span>
          <span className="arrow-part-2"></span>
          <span className="arrow-part-3"></span>
        </div>
      </div>
    </div>
  );
};
