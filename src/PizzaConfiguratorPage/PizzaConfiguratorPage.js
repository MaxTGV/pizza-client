import { useEffect } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../state/ingredients/thunk";
import {
  getIsLoading,
  getIngredientsByCategory,
} from "../state/ingredients/selectors";
import { setPizza } from "../state/pizza/pizzaSlice";

export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegs = useSelector(getIngredientsByCategory("vegetables"));
  const meats = useSelector(getIngredientsByCategory("meat"));

  const history = useHistory();

  const onPizzaChange = (pizza) => {
    dispatch(setPizza(pizza));
    history.push("/payment");
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h3>Конструктор пиццы</h3>
      <PizzaConfigurator
        cheeses={cheeses}
        vegs={vegs}
        meats={meats}
        onPizzaCreated={onPizzaChange}
      />
    </>
  );
};
