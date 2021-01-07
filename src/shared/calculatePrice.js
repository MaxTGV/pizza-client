import { SIZE, DOUGH, SAUCE } from "./pizzaData";

export const calculatePrice = (
  size,
  dough,
  sauces,
  selectedToppings,
  toppingsData
) => {
  const priceSize = SIZE[size].price;
  const priceDough = DOUGH[dough].price;
  const priceSauces = SAUCE[sauces].price;
  const priceToppings = selectedToppings.reduce((price, topping) => {
    const toppingData = toppingsData.find((t) => t.slug === topping);
    return price + toppingData.price;
  }, 0);

  return priceSize + priceDough + priceSauces + priceToppings;
};
