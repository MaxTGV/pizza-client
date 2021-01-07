import { render } from "@testing-library/react";
import { OrderList } from "./OrderList";

describe("OrderList", () => {
  it("renders correctly", () => {
    const { getByText } = render(<OrderList />);

    expect(getByText(/Список заказов/i)).toBeInTheDocument();
  });
});
