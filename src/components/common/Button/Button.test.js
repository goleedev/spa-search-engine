import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./index";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  it("renders the button with children text", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    // Check if the button is rendered with the correct text
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    // Simulate a click event
    fireEvent.click(screen.getByRole("button", { name: /click me/i }));

    // Check if the mock function is called once
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("applies the width style when passed as a prop", () => {
    const customWidth = "200px";
    render(
      <Button onClick={mockOnClick} width={customWidth}>
        Click Me
      </Button>
    );

    // Check if the button has the correct width style
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle(`width: ${customWidth}`);
  });
});
