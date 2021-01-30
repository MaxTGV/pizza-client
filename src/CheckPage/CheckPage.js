import { Check } from "./Check";
import { getIngredientsByCategory } from "../state/ingredients/selectors";
import { getPizza } from "../state/pizza/selectors";
import { useSelector } from "react-redux";

export const CheckPage = () => {
  const pizza = useSelector(getPizza);
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegs = useSelector(getIngredientsByCategory("vegetables"));
  const meats = useSelector(getIngredientsByCategory("meat"));

  return <Check pizza={pizza} cheeses={cheeses} vegs={vegs} meats={meats} />;
};
