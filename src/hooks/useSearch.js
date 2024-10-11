import { useCallback, useEffect, useState } from "react";

import { filterData, getSearchData } from "../services";

const initialFilterState = {
  category: null,
  decision: null,
  company: null,
  date: null,
};

const useSearch = () => {
  const [data, setData] = useState([]);
  const [queryBasedResults, setQueryBasedResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initialFilterState);
  const [sortBy, setSortBy] = useState("date");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
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
  }, []);

  const applyFilters = baseData => {
    return filterData({ data: baseData, query, filters });
  };

  const handleSearch = useCallback(() => {
    const queryResults = filterData({ data, query, filters: initialFilterState });
    setQueryBasedResults(queryResults);
    setFilteredData(applyFilters(queryResults));
    setCurrentPage(1);
    // eslint-disable-next-line
  }, [data, query, filters]);

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

  const handleSortChange = useCallback(
    value => {
      setSortBy(value);
      const sorted = sortData(filteredData, value);
      setFilteredData(sorted);
    },
    [filteredData]
  );

  const handleClearFilters = useCallback(() => {
    setFilters(initialFilterState);
    setFilteredData(queryBasedResults);
    setCurrentPage(1);
  }, [queryBasedResults]);

  const handleClearQuery = useCallback(() => {
    setQuery("");
    const filtered = applyFilters(data);
    setQueryBasedResults(data);
    setFilteredData(filtered);
    setCurrentPage(1);
    // eslint-disable-next-line
  }, [data, filters]);

  const sortData = (data, sortBy) => {
    return [...data].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  return {
    data,
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
    handleClearQuery,
    currentPage,
    setCurrentPage,
  };
};

export default useSearch;
