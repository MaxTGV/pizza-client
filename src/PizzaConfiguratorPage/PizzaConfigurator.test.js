import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DataProvider } from "../DataContext";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { act } from "react-dom/test-utils";

describe("PizzaConfigurator", () => {
  it("renders PizzaConfigurator correctly", () => {
    const { getByText } = render(
      <DataProvider>
        <PizzaConfigurator />
      </DataProvider>
    );
    expect(getByText(/Размер/i)).toBeInTheDocument();
    expect(getByText(/тесто/i)).toBeInTheDocument();
    expect(getByText(/выберите соус/i)).toBeInTheDocument();
    expect(getByText(/добавьте сыр/i)).toBeInTheDocument();
    expect(getByText(/добавьте овощи/i)).toBeInTheDocument();
    expect(getByText(/добавьте мясо/i)).toBeInTheDocument();

  });

  describe("with all additions uncheked", () => {
    it("shous minimum prise", () => {
      const { getByText } = render(
        <DataProvider>
          <PizzaConfigurator />
        </DataProvider>
      );
      expect(getByText(/Заказать за 200/i)).toBeInTheDocument();
    });
  });

  describe("with all additions cheked", () => {
    it("shous maximum prise", () => {
      const { getByText } = render(
        <DataProvider>
          <PizzaConfigurator />
        </DataProvider>
      );

      fireEvent.click(getByText(/35 см/i));

      fireEvent.click(getByText(/моцарелла/i));
      fireEvent.click(getByText(/чеддер/i));
      fireEvent.click(getByText(/дор блю/i));

      fireEvent.click(getByText(/помидор/i));
      fireEvent.click(getByText(/грибы/i));
      fireEvent.click(getByText(/перец/i));
      fireEvent.click(getByText(/ананас/i));
      fireEvent.click(getByText(/оливки/i));
      fireEvent.click(getByText(/лук/i));
      fireEvent.click(getByText(/брокколи/i));

      fireEvent.click(getByText(/бекон/i));
      fireEvent.click(getByText(/пепперони/i));
      fireEvent.click(getByText(/ветчина/i));
      fireEvent.click(getByText(/курица/i));
      fireEvent.click(getByText(/салями/i));

      expect(getByText(/Заказать за 685/i)).toBeInTheDocument();
    });
  });

  describe("on pizza submit", () => {
    it("passes constructed pizza", async () => {
      const onPizzaSubmit = jest.fn();
      const { getByText } = render(
          <DataProvider>
            <PizzaConfigurator onPizzaCreated={onPizzaSubmit} />
          </DataProvider>
      );

      fireEvent.click(getByText(/35 см/i));
      fireEvent.click(getByText(/чеддер/i));
      fireEvent.click(getByText(/перец/i));
      fireEvent.click(getByText(/курица/i));

      await act(async () => {
        fireEvent.click(getByText(/Заказать за 337/i));
      });

      expect(onPizzaSubmit).toBeCalledWith({
        size: "large",
        dough: "thin",
        sauces: "tomato",
        cheeses: ["cheddar"],
        vegs: ["pepper"],
        meats: ["chiken"],
        price: 337,
      });
    });
  });
});
