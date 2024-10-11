import { render, screen } from "@testing-library/react";

import Dropdown from "./index";

describe("Dropdown Component", () => {
  const mockOnChange = jest.fn();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("applies the custom width style", () => {
    const customWidth = "300px";
    render(<Dropdown options={options} placeholder="Select an option" onChange={mockOnChange} width={customWidth} />);

    // Check if the wrapper has the correct width style using data-testid
    const wrapper = screen.getByTestId("select-wrapper");
    expect(wrapper).toHaveStyle(`width: ${customWidth}`);
  });
});
