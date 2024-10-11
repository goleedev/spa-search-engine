import { fireEvent, render, screen } from "@testing-library/react";

import { SearchIcon } from "../../../assets";
import Input from "./index";

describe("Input Component", () => {
  const mockOnChange = jest.fn();

  it("renders the input with the correct placeholder", () => {
    render(<Input value="" onChange={mockOnChange} placeholder="Enter text" />);

    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  it("calls onChange when typing in the input field", () => {
    render(<Input value="" onChange={mockOnChange} placeholder="Enter text" />);

    fireEvent.change(screen.getByPlaceholderText(/enter text/i), { target: { value: "Test" } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("renders the icon when provided", () => {
    render(<Input value="" onChange={mockOnChange} icon={SearchIcon} placeholder="Search" />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
