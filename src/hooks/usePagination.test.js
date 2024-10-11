import { renderHook, act } from "@testing-library/react";

import usePagination from "./usePagination";

describe("usePagination", () => {
  const setCurrentPage = jest.fn();
  const totalItems = 50;
  const itemsPerPage = 10;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calculates total pages correctly", () => {
    const { result } = renderHook(() => usePagination(totalItems, itemsPerPage, 1, setCurrentPage));

    expect(result.current.totalPages).toBe(5);
  });

  test("calculates startIndex and endIndex correctly", () => {
    const { result } = renderHook(() => usePagination(totalItems, itemsPerPage, 2, setCurrentPage));

    expect(result.current.startIndex).toBe(10);
    expect(result.current.endIndex).toBe(20);
  });

  test("handles page change within bounds", () => {
    const { result } = renderHook(() => usePagination(totalItems, itemsPerPage, 1, setCurrentPage));

    act(() => {
      result.current.handlePageChange(3);
    });

    expect(setCurrentPage).toHaveBeenCalledWith(3);
  });

  test("does not change page if out of bounds", () => {
    const { result } = renderHook(() => usePagination(totalItems, itemsPerPage, 1, setCurrentPage));

    act(() => {
      result.current.handlePageChange(0);
    });
    act(() => {
      result.current.handlePageChange(6);
    });

    expect(setCurrentPage).not.toHaveBeenCalled();
  });

  test("updates startIndex and endIndex when currentPage changes", () => {
    let currentPage = 1;
    const { result, rerender } = renderHook(() => usePagination(totalItems, itemsPerPage, currentPage, setCurrentPage));

    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(10);

    currentPage = 3;
    rerender();

    expect(result.current.startIndex).toBe(20);
    expect(result.current.endIndex).toBe(30);
  });
});
