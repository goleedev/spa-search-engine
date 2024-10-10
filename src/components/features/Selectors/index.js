import Dropdown from "../../common/Dropdown";
import * as S from "./styles";

const itemsPerPageOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];
const sortByOptions = [
  { value: "date", label: "Sort by Date" },
  { value: "title", label: "Sort by Title" },
];

const Selectors = ({ itemsPerPage, sortBy, onItemsPerPageChange, onSortChange, totalResults, currentPage }) => {
  const start = Math.max((currentPage - 1) * itemsPerPage + 1, 0);
  const end = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <S.SelectorsContainer>
      <S.Result>
        <S.ResultText>Results</S.ResultText>
        <S.ResultCount>
          Showing results {totalResults > 0 ? start : 0}-{end} of {totalResults}
        </S.ResultCount>
      </S.Result>

      <S.SelectorsGroups>
        <Dropdown
          placeholder="Items per page"
          options={itemsPerPageOptions}
          value={itemsPerPageOptions.find(opt => opt.value === itemsPerPage)}
          onChange={option => onItemsPerPageChange(option ? option.value : 5)}
          width="109px"
        />
        <Dropdown
          placeholder="Sort by"
          options={sortByOptions}
          value={sortByOptions.find(opt => opt.value === sortBy)}
          onChange={option => onSortChange(option ? option.value : "date")}
          width="193px"
        />
      </S.SelectorsGroups>
    </S.SelectorsContainer>
  );
};

export default Selectors;
