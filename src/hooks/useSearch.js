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

  const handleSearch = useCallback(() => {
    const filtered = filterData({ data, query, filters: initialFilterState });
    setQueryBasedResults(filtered);
    setFilteredData(filtered);
  }, [data, query]);

  const handleFilterChange = useCallback(
    (key, selectedOption) => {
      const updatedFilters = { ...filters, [key]: selectedOption };
      setFilters(updatedFilters);
      const filtered = filterData({ data: queryBasedResults, query, filters: updatedFilters });
      setFilteredData(filtered);
    },
    [queryBasedResults, query, filters]
  );

  const handleSortChange = useCallback(
    value => {
      setSortBy(value);
      sortData(filteredData, value);
    },
    [filteredData]
  );

  const handleClearFilters = useCallback(() => {
    setFilters(initialFilterState);
    setFilteredData(queryBasedResults);
  }, [queryBasedResults]);

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
  };
};

export default useSearch;
