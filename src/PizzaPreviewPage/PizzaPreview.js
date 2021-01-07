import { useHistory } from "react-router-dom";
import { addNewOrder } from "../shared/api";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import { Payment } from "./Payment";

export const PizzaPreview = ({ newPizza, toppings }) => {
  const { size, dough, sauces, cheese, vegetables, meat, price } = newPizza;
  const history = useHistory();

  const onSubmit = async (data) => {
    const { address, card_number, name } = data;

    let formdata = new FormData();
    formdata.append("ingredients", [
      SIZE[size].name,
      DOUGH[dough].name,
      SAUCE[sauces].name,
      cheese.map((cheese) => toppings.find((t) => t.slug === cheese).name).join(", "),
      vegetables.map((vegetables) => toppings.find((t) => t.slug === vegetables).name).join(", "),
      meat.map((meat) => toppings.find((t) => t.slug === meat).name).join(", "),
    ]);
    formdata.append("address", address);
    formdata.append("card_number", card_number);
    formdata.append("name", name);

    await addNewOrder(formdata);
    history.push("/check");
  };

  return (
    <>
      <h3>Ваш заказ:</h3>
      <p>Размер - {SIZE[size].name}</p>
      <p>Тесто - {DOUGH[dough].name}</p>
      <p>Соус - {SAUCE[sauces].name}</p>
      <p>
        Cыр -{" "}
        {cheese
          .map((cheese) => toppings.find((t) => t.slug === cheese).name)
          .join(", ")}
      </p>
      <p>
        Овощи -{" "}
        {vegetables
          .map((vegetables) => toppings.find((t) => t.slug === vegetables).name)
          .join(", ")}
      </p>
      <p>
        Мясо -{" "}
        {meat
          .map((meat) => toppings.find((t) => t.slug === meat).name)
          .join(", ")}
      </p>

      <h3>Итоговая цена - {price} </h3>

      <Payment postOrder={onSubmit} />
    </>
  );
};
