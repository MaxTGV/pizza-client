import { render } from "@testing-library/react";
import { Check } from "./Check";

describe("Check", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Check />);

    expect(getByText(/чек/i)).toBeInTheDocument();
  });
});
