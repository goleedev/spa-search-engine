import { ChevronArrowIcon } from "../../../assets";
import * as S from "./styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageButtons = () => {
    return [...Array(totalPages).keys()].map((_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? "active" : "inactive"}>
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <S.Pagination>
      {totalPages > 0 && (
        <>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronArrowIcon />
          </button>
          {renderPageButtons()}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <ChevronArrowIcon className="flip" />
          </button>
        </>
      )}
    </S.Pagination>
  );
};

export default Pagination;
