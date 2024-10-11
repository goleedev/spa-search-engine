import { render, screen, fireEvent } from "@testing-library/react";

import Pagination from "./index";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it("renders the correct number of page buttons", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Check that the buttons for pages 1, 2, and 3 are rendered
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("calls onPageChange when a page button is clicked", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Click on page 2 button
    fireEvent.click(screen.getByText("2"));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("disables the previous button when on the first page", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Get the first button, which is the previous button
    const prevButton = screen.getAllByRole("button")[0];
    expect(prevButton).toBeDisabled();
  });

  it("disables the next button when on the last page", () => {
    render(<Pagination currentPage={3} totalPages={3} onPageChange={mockOnPageChange} />);

    // Get the last button, which is the next button
    const nextButton = screen.getAllByRole("button").pop();
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange when clicking next and previous buttons", () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    // Click the next button
    const nextButton = screen.getAllByRole("button").pop();
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);

    // Click the previous button
    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
