import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { filterData, getSearchData } from "../services";
import useSearch from "./useSearch";

// Mock the getSearchData function
jest.mock("../services", () => ({
  getSearchData: jest.fn(),
  filterData: jest.fn(),
}));

// Create a simple test component to use the useSearch hook
const TestComponent = () => {
  const {
    data,
    filteredData,
    query,
    sortBy,
    loading,
    setQuery,
    handleSearch,
    handleFilterChange,
    handleSortChange,
    handleClearFilters,
  } = useSearch();

  return (
    <div>
      <p>Loading: {loading ? "true" : "false"}</p>
      <p>Query: {query || ""}</p>
      <p>Sort By: {sortBy}</p>
      <p>Data Length: {data.length}</p>
      <p>Filtered Data Length: {filteredData.length}</p>
      <button onClick={() => setQuery("test")}>Set Query</button>
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => handleFilterChange("category", { value: "Loan" })}>Filter by Loan</button>
      <button onClick={() => handleSortChange("title")}>Sort by Title</button>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};

describe("useSearch", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    getSearchData.mockResolvedValue([
      { id: "1", title: "Loan Issue", category: "Loan", date: "2022-01-01" },
      { id: "2", title: "Credit Card Issue", category: "Credit Card", date: "2023-01-01" },
    ]);
    filterData.mockImplementation(({ data, query }) => data.filter(item => item.title.includes(query)));
  });

  test("updates query and searches", async () => {
    render(<TestComponent />);

    // Set the query
    await userEvent.click(screen.getByText("Set Query"));

    // Ensure the query state has updated before proceeding
    await waitFor(() => {
      expect(screen.getByText("Query: test")).toBeInTheDocument();
    });

    // Trigger the search action
    userEvent.click(screen.getByText("Search"));

    // Check that filterData was called with the updated query
    expect(filterData).toHaveBeenCalledWith(expect.objectContaining({ query: "test" }));
  });

  test("applies filters correctly", async () => {
    render(<TestComponent />);
    userEvent.click(screen.getByText("Filter by Loan"));

    expect(filterData).toHaveBeenCalledWith(expect.objectContaining({ filters: expect.anything() }));
    expect(await screen.findByText("Filtered Data Length: 2")).toBeInTheDocument();
  });

  test("sorts data correctly", async () => {
    render(<TestComponent />);
    userEvent.click(screen.getByText("Sort by Title"));

    expect(await screen.findByText("Sort By: title")).toBeInTheDocument();
  });

  test("clears filters", async () => {
    render(<TestComponent />);
    userEvent.click(screen.getByText("Filter by Loan"));
    userEvent.click(screen.getByText("Clear Filters"));

    expect(await screen.findByText("Filtered Data Length: 2")).toBeInTheDocument();
  });
});
