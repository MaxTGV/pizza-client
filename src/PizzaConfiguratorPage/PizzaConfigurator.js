import React from "react";
import { useForm } from "react-hook-form";
import { calculatePrice } from "../shared/calculatePrice";
import { StandartSet } from "./StandartSet";
import { Toppings } from "./Toppings";

export const PizzaConfigurator = ({ cheeses, vegs, meats, onPizzaCreated }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "small",
      dough: "thin",
      sauces: "tomato",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const ingredients = watch();

  const price = calculatePrice(
    ingredients.size,
    ingredients.dough,
    ingredients.sauces,
    [...ingredients.cheese, ...ingredients.vegetables, ...ingredients.meat],
    [...cheeses, ...vegs, ...meats]
  );

  const onSubmit = (data) => {
    onPizzaCreated({ ...data, price });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StandartSet
          register={register}
          type="radio"
          name={["size", "dough", "sauces"]}
        />
        <Toppings
          register={register}
          type="checkbox"
          legend="сыр"
          topping={cheeses}
        />
        <Toppings
          register={register}
          type="checkbox"
          legend="овощи"
          topping={vegs}
        />
        <Toppings
          register={register}
          type="checkbox"
          legend="мясо"
          topping={meats}
        />
        <button>Заказать за {price}</button>
      </form>
    </>
  );
};
