import { useCallback, useMemo } from "react";

const usePagination = (totalItems, itemsPerPage, currentPage, setCurrentPage) => {
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const handlePageChange = useCallback(
    newPage => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    },
    [totalPages, setCurrentPage]
  );

  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const endIndex = useMemo(
    () => Math.min(startIndex + itemsPerPage, totalItems),
    [startIndex, itemsPerPage, totalItems]
  );

  return {
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
  };
};

export default usePagination;
