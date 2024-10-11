import { useMemo, useState } from "react";

import usePagination from "../../../hooks/usePagination";
import useSearch from "../../../hooks/useSearch";
import FilterContainer from "../FilterContainer";
import PaginationContainer from "../PaginationContainer";
import ResultsContainer from "../ResultsContainer";
import SearchForm from "../SearchForm";
import SearchHeader from "../SearchHeader";
import Selectors from "../Selectors";
import * as S from "./styles";

const SearchEngine = () => {
  const {
    filteredData,
    query,
    filters,
    sortBy,
    loading,
    setQuery,
    handleSearch,
    handleFilterChange,
    handleSortChange,
    handleClearFilters,
    currentPage,
    setCurrentPage,
  } = useSearch();

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { totalPages, startIndex, endIndex, handlePageChange } = usePagination(
    filteredData.length,
    itemsPerPage,
    currentPage,
    setCurrentPage
  );

  const currentData = useMemo(() => filteredData.slice(startIndex, endIndex), [filteredData, startIndex, endIndex]);

  return (
    <S.SearchEngineContainer>
      <SearchHeader />
      <SearchForm query={query} setQuery={setQuery} onSearch={handleSearch} />
      <FilterContainer filters={filters} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
      <Selectors
        totalResults={filteredData.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        sortBy={sortBy}
        onItemsPerPageChange={value => {
          setItemsPerPage(value);
          setCurrentPage(1);
          handlePageChange(1, value);
        }}
        onSortChange={handleSortChange}
      />
      {!loading ? <ResultsContainer data={currentData} /> : <p>Loading...</p>}
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.SearchEngineContainer>
  );
};

export default SearchEngine;
