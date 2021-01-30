import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { PizzaPreview } from "./PizzaPreview";
import { getPizza } from "../state/pizza/selectors";
import {
  getIngredients,
  getIngredientsByCategory,
} from "../state/ingredients/selectors";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import { addNewOrder } from "../shared/api";
import { useHistory } from "react-router-dom";
import { Payment } from "./Payment";
import { Navbar } from "../shared/component/Navbar";
import styled from "styled-components";
import arrowLeft from "../img/icn_arrow-left.svg";

const Title = styled.p`
  font-family: "Rounded Mplus 1c";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  margin: 0px;
  color: #1f1f33;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const PizzaPreviewPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegs = useSelector(getIngredientsByCategory("vegetables"));
  const meats = useSelector(getIngredientsByCategory("meat"));
  const history = useHistory();

  const onSubmit = async (data) => {
    const { address, card_number, name } = data;
    const { size, dough, sauces, cheese, vegetables, meat } = pizza;

    let formdata = new FormData();
    formdata.append("ingredients", [
      SIZE[size].name,
      DOUGH[dough].name,
      SAUCE[sauces].name,
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
    formdata.append("address", address);
    formdata.append("card_number", card_number);
    formdata.append("name", name);

    await addNewOrder(formdata);
    history.push("/check");
  };

  if (!pizza.price) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar>
        <StyledLink to="/">
          <img src={arrowLeft} alt="arrowLeft" />
        </StyledLink>
        <Title>Мои заказы</Title>
      </Navbar>
      <PizzaPreview
        newPizza={pizza}
        cheeses={cheeses}
        vegs={vegs}
        meats={meats}
      />
      <Payment postOrder={onSubmit} price={pizza.price}/>
    </>
  );
};
