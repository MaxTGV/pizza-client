import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { PizzaConfiguratorPage } from "./PizzaConfiguratorPage";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("./PizzaConfigurator", () => ({
  PizzaConfigurator: ({ onPizzaCreated }) => (
    <button
      onClick={() =>
        onPizzaCreated({
          size: "large",
          dough: "thin",
          sauces: "tomato",
          cheeses: ["cheddar"],
          vegs: ["pepper"],
          meats: ["chiken"],
          price: 337,
        })
      }
    >
      Сохранить
    </button>
  ),
}));

describe("PizzaConfiguratorPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaConfiguratorPage
          _usePizzaHook={() => ({
            setPizza: () => {},
          })}
        />
      </MemoryRouter>
    );
    expect(getByText(/конструктор пиццы/i)).toBeInTheDocument();
  });

  describe(".onPizzaChange", () => {
    it("sets pizza value in the pizza context", () => {
      const mockSetPizza = jest.fn();
      const { getByText } = render(
        <MemoryRouter>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({
              setPizza: mockSetPizza,
            })}
          />
        </MemoryRouter>
      );
      fireEvent.click(getByText(/сохранить/i));

      expect(mockSetPizza).toBeCalledWith({
        size: "large",
        dough: "thin",
        sauces: "tomato",
        cheeses: ["cheddar"],
        vegs: ["pepper"],
        meats: ["chiken"],
        price: 337,
      });
    });

    it("navigates to `/payment`", () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({
              setPizza: () => {},
            })}
          />
        </Router>
      );
      fireEvent.click(getByText(/сохранить/i));

      expect(history.location.pathname).toEqual("/payment");
    });
  });
});
