import Pagination from "../../common/Pagination";
import * as S from "./styles";

const PaginationContainer = ({ currentPage, totalPages, onPageChange }) => (
  <S.PaginationContainer>
    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
  </S.PaginationContainer>
);

export default PaginationContainer;
