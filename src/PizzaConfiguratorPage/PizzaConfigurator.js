import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { calculatePrice } from "../shared/calculatePrice";
import { BaseButton } from "../shared/component/BaseButton";
import { Form } from "../shared/component/Form";
import { StandartSet } from "./StandartSet";
import { Toppings } from "./Toppings";
import plate from "../img/Assets/plate.svg";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";

const AssetsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: auto;
  background-color: white;
  padding-bottom: 24px;
`;

const Assets = styled.div`
  width: 300px;
  height: 275px;
  transform: scale(0.9, 1);
  background: no-repeat center/100% url(${plate});
  opacity: 1;
  animation-name: visible-assets;
  animation-duration: 3s;
`;

const AssetComponent = styled.div`
  position: absolute;
  width: 265px;
  height: 260px;
  transform: scale(1.1, ${(props) => (props.dough === "lush" ? "1.1" : "1")});
  background: no-repeat
    ${(props) => (props.size === "small" ? props.small : props.large)}
    ${(props) =>
      props.dough === "thin" && props.size === "large"
        ? props.largeThin
        : props.dough === "lush" && props.size === "large"
        ? props.largeLush
        : ""} /
    ${(props) =>
      props.size === "small" ? `${props.scale / 1.16}%` : `${props.scale}%`}
    url(${(props) =>
      props.dough
        ? require(`../img/Assets/${props.dough}.svg`).default
        : `https://artem-pizza-server.herokuapp.com/${props.image}.svg`});
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  animation-name: visible-assets;
  animation-duration: 0.2s;
  transition: background 0.2s linear;
`;

const AssetTitle = styled.p`
  font-family: "Rounded Mplus 1c";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  width: 328px;
  height: 28px;
  text-align: left;
  margin: 0;
`;

const AssetsDescription = styled.p`
  width: 328px;
  height: auto;
  font-family: "Rounded Mplus 1c";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 6px 0px 0px 0px;
  white-space: pre-line;
`;

const BottomDiv = styled.div`
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 16px;
  position: fixed;
  width: 326px;
  top: 576px;
`;

const StyledStandartSet = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 16px 20px 16px;
  width: 328px;
  height: auto;
`;

const StyledSauces = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 328px;
  height: auto;
  overflow-x: scroll;
  border-radius: 10px;
  background: white;
  scrollbar-width: thin;
`;

const StyledToppings = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px 24px 16px;
  width: 328px;
  height: auto;
  h3 {
    margin: 0;
    padding-bottom: 4px;
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b7c;
    width: 112px;
    height: 20px;
  }
`;

const StyledLongToppings = styled.div`
  width: 328px;
  height: auto;
  overflow-x: scroll;
  scrollbar-width: thin;
`;

export const PizzaConfigurator = ({ cheeses, vegs, meats, onPizzaCreated }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "small",
      dough: "thin",
      sauces: "tomatosauce",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const ingredients = watch();
  const { size, dough, sauces } = ingredients;

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

  const toppingsDescription = () => {
    const nameToppings = [
      ...ingredients.cheese,
      ...ingredients.vegetables,
      ...ingredients.meat,
    ].reduce((name, topping) => {
      const toppingData = [...cheeses, ...vegs, ...meats].find(
        (t) => t.slug === topping
      );
      return `${name} \u00b7 ${toppingData.name}`;
    }, "");

    return nameToppings;
  };

  return (
    <>
      <AssetsContainer>
        <Assets>
          <AssetComponent
            size={ingredients.size}
            small="34px 25px"
            large="center"
            largeThin="10px"
            largeLush="18px"
            dough={ingredients.dough}
            scale="87"
          ></AssetComponent>
          {ingredients.cheese &&
            ingredients.cheese.map((cheese, i) => (
              <AssetComponent
                key={i}
                size={ingredients.size}
                small="40px 30px"
                large="30px 15px"
                image={cheese}
                opacity="0.5"
                scale="80"
              ></AssetComponent>
            ))}
          {ingredients.vegetables &&
            ingredients.vegetables.map((vegs, i) => (
              <AssetComponent
                key={i}
                size={ingredients.size}
                small="center 40px"
                large="center 30px"
                image={vegs}
                scale="70"
              ></AssetComponent>
            ))}
          {ingredients.meat &&
            ingredients.meat.map((meat, i) => (
              <AssetComponent
                key={i}
                size={ingredients.size}
                small="center 40px"
                large="center 30px"
                image={meat}
                scale="70"
              ></AssetComponent>
            ))}
        </Assets>
        <AssetTitle>Ленивая Маргарита</AssetTitle>
        <AssetsDescription>
          {`${SIZE[size].name} см на ${DOUGH[dough].name
            .slice(0, -2)
            .toLowerCase()}ом  тесте \n ${
            SAUCE[sauces].name
          } соус ${toppingsDescription()}`}
        </AssetsDescription>
      </AssetsContainer>
      <Form onSubmit={handleSubmit(onSubmit)} pb="6">
        <StyledStandartSet>
          <StandartSet
            ref={register}
            name={"size"}
            type="radio"
            title="Размер"
            width="137"
            labelwidth="63"
            items={[SIZE]}
          />
          <StandartSet
            ref={register}
            name={"dough"}
            type="radio"
            title="Тесто"
            width="161"
            labelwidth="72"
            items={[DOUGH]}
          />
        </StyledStandartSet>
        <StyledStandartSet>
          <StyledSauces>
            <StandartSet
              ref={register}
              name={"sauces"}
              type="radio"
              width="650"
              title="Выберите соус"
              items={[SAUCE]}
            />
          </StyledSauces>
        </StyledStandartSet>
        <StyledToppings>
          <h3>Добавьте сыр</h3>
          <Toppings ref={register} topping={cheeses} width="330" />
        </StyledToppings>
        <StyledToppings>
          <h3>Добавьте овощи</h3>
          <StyledLongToppings>
            <Toppings ref={register} topping={vegs} width="1000" />
          </StyledLongToppings>
        </StyledToppings>
        <StyledToppings>
          <h3>Добавьте мясо</h3>
          <StyledLongToppings>
            <Toppings ref={register} topping={meats} width="584" />
          </StyledLongToppings>
        </StyledToppings>
        <BottomDiv>
          <BaseButton mt="1" mb="1">
            Заказать за {price}
          </BaseButton>
        </BottomDiv>
      </Form>
    </>
  );
};
