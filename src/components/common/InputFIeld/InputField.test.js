import { fireEvent, render, screen } from "@testing-library/react";

import { SearchIcon } from "../../../assets";
import InputField from "./index";

describe("InputField Component", () => {
  const mockOnChange = jest.fn();

  it("renders the input with the correct placeholder", () => {
    render(<InputField value="" onChange={mockOnChange} placeholder="Enter text" />);

    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  it("calls onChange when typing in the input field", () => {
    render(<InputField value="" onChange={mockOnChange} placeholder="Enter text" />);

    fireEvent.change(screen.getByPlaceholderText(/enter text/i), { target: { value: "Test" } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("renders the icon when provided", () => {
    render(<InputField value="" onChange={mockOnChange} icon={SearchIcon} placeholder="Search" />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
