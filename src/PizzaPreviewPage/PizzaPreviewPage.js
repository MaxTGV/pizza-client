import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PizzaPreview } from "./PizzaPreview";
import { getPizza } from "../state/pizza/selectors";
import { getIngredientsByCategory } from "../state/ingredients/selectors";
import { HeaderContainer } from "./HeaderContainer";

export const PizzaPreviewPage = () => {
  const pizza = useSelector(getPizza);
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegs = useSelector(getIngredientsByCategory("vegetables"));
  const meats = useSelector(getIngredientsByCategory("meat"));

  if (!pizza.price) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderContainer />
      <PizzaPreview
        newPizza={pizza}
        cheeses={cheeses}
        vegs={vegs}
        meats={meats}
      />
    </>
  );
};
