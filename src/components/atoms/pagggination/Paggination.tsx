import { Pagginator } from "models/Pagginator";
import { FC } from "react";
import "./style.css";

const Pagination: FC<Pagginator> = ({
  nPages,
  currentPage,
  setCurrentPage,
}) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage((page: number) => page + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((page: number) => page - 1);
    }
  };

  return (
    <div className="center">
      <div className="pagination">
        <p
          key="prev"
          data-testid="prev"
          onClick={goToPrevPage}
          style={{
            cursor: currentPage !== 1 ? "pointer" : "",
          }}
        >
          &laquo;
        </p>
        <p key="current" className="active">
          {currentPage}
        </p>

        <p
          key="next"
          data-testid="next"
          onClick={goToNextPage}
          style={{
            cursor: currentPage !== nPages ? "pointer" : "",
          }}
        >
          &raquo;
        </p>
      </div>
    </div>
  );
};

export default Pagination;
