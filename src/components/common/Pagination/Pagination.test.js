import { render, screen, fireEvent } from "@testing-library/react";

import Pagination from "./index";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it("renders the correct number of page buttons", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("calls onPageChange when a page button is clicked", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText("2"));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("disables the previous button when on the first page", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    const prevButton = screen.getAllByRole("button")[0];
    expect(prevButton).toBeDisabled();
  });

  it("disables the next button when on the last page", () => {
    render(<Pagination currentPage={3} totalPages={3} onPageChange={mockOnPageChange} />);

    const nextButton = screen.getAllByRole("button").pop();
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange when clicking next and previous buttons", () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    const nextButton = screen.getAllByRole("button").pop();
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);

    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
