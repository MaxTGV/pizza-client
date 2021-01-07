import React from "react";
import { render } from "@testing-library/react";
import { DataProvider } from "../DataContext";
import { PizzaPreview } from "./PizzaPreview";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("PizzaPreview", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <DataProvider>
          <PizzaPreview
            newPizza={{
              size: "large",
              dough: "thin",
              sauces: "tomato",
              cheeses: ["cheddar"],
              vegs: ["pepper"],
              meats: ["chiken"],
              price: 337,
            }}
          />
        </DataProvider>
      </Router>
    );

    expect(getByText(/ваш заказ/i)).toBeInTheDocument();
    expect(getByText(/Размер - 35 см/i)).toBeInTheDocument();
    expect(getByText(/Тесто - Тонкое/i)).toBeInTheDocument();
    expect(getByText(/Соус - Томатный/i)).toBeInTheDocument();
    expect(getByText(/Cыр - Чеддер/i)).toBeInTheDocument();
    expect(getByText(/Овощи - Перец/i)).toBeInTheDocument();
    expect(getByText(/Мясо - Курица/i)).toBeInTheDocument();
    expect(getByText(/Итоговая цена - 337/i)).toBeInTheDocument();
  });
});
