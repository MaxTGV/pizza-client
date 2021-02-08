import React from "react";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import { useSelector } from "react-redux";
import { getIngredients } from "../state/ingredients/selectors";
import { addNewOrder } from "../shared/api";
import { OrderCard } from "./OrderCard";
import { useHistory } from "react-router-dom";
import { Payment } from "./Payment";
import { ContentContainer } from "./style";

export const PizzaPreview = ({ newPizza, cheeses, vegs, meats }) => {
  const ingredients = useSelector(getIngredients);
  const history = useHistory();

  const onSubmit = async (data) => {
    const { address, card_number, name } = data;
    const { size, dough, sauces, cheese, vegetables, meat, price } = newPizza;

    let formdata = new FormData();
    formdata.append("ingredients", [
      cheese
        .map((cheese) => ingredients.find((t) => t.slug === cheese).name)
        .join(", "),
      vegetables
        .map(
          (vegetables) => ingredients.find((t) => t.slug === vegetables).name
        )
        .join(", "),
      meat
        .map((meat) => ingredients.find((t) => t.slug === meat).name)
        .join(", "),
    ]);
    formdata.append("sauces", SAUCE[sauces].name);
    formdata.append("size", SIZE[size].name);
    formdata.append("dough", DOUGH[dough].name);
    formdata.append("price", price);
    formdata.append("address", address);
    formdata.append("card_number", card_number);
    formdata.append("name", name);
    formdata.append(
      "payment",
      card_number.substring(0, 1) === "4"
        ? "visa"
        : card_number.substring(0, 1) === "5"
        ? "mastercard"
        : "default"
    );

    await addNewOrder(formdata);
    history.push("/check");
  };

  return (
    <ContentContainer>
      <OrderCard
        orderData={newPizza}
        toppingsData={[...cheeses, ...vegs, ...meats]}
      />
      <Payment postOrder={onSubmit} price={newPizza.price} />
    </ContentContainer>
  );
};
