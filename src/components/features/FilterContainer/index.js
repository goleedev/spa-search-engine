import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "../../../assets";
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
];

const INITIAL_DATE = "2022-01-01";

const FilterContainer = ({ filters, onFilterChange, onClearFilters }) => {
  const handleDateChange = dates => {
    const [start, end] = dates;
    onFilterChange("date", { start, end });
  };

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
        <S.DatePickerWrapper>
          <CalendarIcon />
          <DatePicker
            selected={filters.date?.start ?? INITIAL_DATE}
            startDate={filters.date?.start}
            endDate={filters.date?.end}
            onChange={handleDateChange}
            selectsRange
            placeholderText="Date"
            customInput={<S.DateInput />}
          />
        </S.DatePickerWrapper>
      </S.FilterGroup>

      <S.ClearFiltersButton onClick={onClearFilters}>Clear Filters</S.ClearFiltersButton>
    </S.FilterContainer>
  );
};

export default FilterContainer;
