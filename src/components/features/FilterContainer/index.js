import Dropdown from "../../common/Dropdown";
import * as S from "./styles";

const filterOptions = [
  {
    placeholder: "Category",
    options: [
      { value: "Loan", label: "Loan" },
      { value: "Credit Card", label: "Credit Card" },
      { value: "Insurance", label: "Insurance" },
    ],
    key: "category",
  },
  {
    placeholder: "Decision",
    options: [
      { value: "Upheld", label: "Upheld" },
      { value: "Rejected", label: "Rejected" },
    ],
    key: "decision",
  },
  {
    placeholder: "Company",
    options: [{ value: "Barclays Bank Plc", label: "Barclays Bank Plc" }],
    key: "company",
  },
  {
    placeholder: "Date",
    options: [
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
    ],
    key: "date",
  },
];

const FilterContainer = ({ filters, onFilterChange, onClearFilters }) => {
  return (
    <S.FilterContainer>
      <S.FilterGroup>
        {filterOptions.map(({ placeholder, options, key }) => (
          <Dropdown
            key={key}
            placeholder={placeholder}
            options={options}
            value={filters[key]}
            onChange={option => onFilterChange(key, option)}
          />
        ))}
      </S.FilterGroup>

      <S.ClearFiltersButton onClick={onClearFilters}>Clear Filters</S.ClearFiltersButton>
    </S.FilterContainer>
  );
};

export default FilterContainer;
