import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PizzaPreview } from "./PizzaPreview";
import { getPizza } from "../state/pizza/selectors";
import { getIngredients } from "../state/ingredients/selectors";

export const PizzaPreviewPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2>Ваша пицца:</h2>
      <PizzaPreview newPizza={pizza} toppings={ingredients} />
    </>
  );
};
