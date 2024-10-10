import { useCallback, useEffect, useState } from "react";

import { filterData, getSearchData } from "../../../services";
import FilterContainer from "../FilterContainer";
import PaginationContainer from "../PaginationContainer";
import ResultsContainer from "../ResultsContainer";
import SearchForm from "../SearchForm";
import SearchHeader from "../SearchHeader";
import Selectors from "../Selectors";
import * as S from "./styles";

const initialFilterState = {
  category: null,
  decision: null,
  company: null,
  date: null,
};

const SearchEngine = () => {
  const [data, setData] = useState([]);
  const [queryBasedResults, setQueryBasedResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initialFilterState);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState("date");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedData = await getSearchData();
        setData(fetchedData);
        setQueryBasedResults(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setData([]);
      setQueryBasedResults([]);
      setFilteredData([]);
    };
  }, []);

  const handleSearch = useCallback(() => {
    const filtered = filterData({ data, query, filters: initialFilterState });
    setQueryBasedResults(filtered);
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [data, query]);

  const handleFilterChange = useCallback(
    (key, selectedOption) => {
      const updatedFilters = { ...filters, [key]: selectedOption };
      setFilters(updatedFilters);

      const filtered = filterData({ data: queryBasedResults, query, filters: updatedFilters });
      setFilteredData(filtered);
      setCurrentPage(1);
    },
    [queryBasedResults, query, filters]
  );

  const handleItemsPerPageChange = value => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleSortChange = value => {
    setSortBy(value);
    sortData(value);
  };

  const handleClearFilters = () => {
    setFilters(initialFilterState);
    setFilteredData(queryBasedResults);
    setCurrentPage(1);
  };

  const sortData = sortBy => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setFilteredData(sortedData);
  };

  useEffect(() => {
    sortData(sortBy);
    // eslint-disable-next-line
  }, [sortBy]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
        onItemsPerPageChange={handleItemsPerPageChange}
        onSortChange={handleSortChange}
      />
      {!loading ? <ResultsContainer data={currentData} /> : <p>Loading...</p>}
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </S.SearchEngineContainer>
  );
};

export default SearchEngine;
