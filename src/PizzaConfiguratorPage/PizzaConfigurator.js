import React from "react";
import { useForm } from "react-hook-form";
import { calculatePrice } from "../shared/calculatePrice";
import { Button } from "../shared/component/Button";
import { Form } from "../shared/component/Form";
import { RadioGroup } from "./RadioGroup";
import { Toppings } from "./Toppings";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import { AssetsContainer } from "./AssetsContainer";
import {
  ContentContainer,
  StandartSetContainer,
  SmallContainer,
  SaucesContainer,
  SaucesRadioContainer,
  ToppingsContainer,
  ScrollToppingsContainer,
  ButtonContainer,
} from "./style";

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
  const { size, dough, sauces, cheese, vegetables, meat } = ingredients;

  const price = calculatePrice(
    size,
    dough,
    sauces,
    [...cheese, ...vegetables, ...meat],
    [...cheeses, ...vegs, ...meats]
  );

  const onSubmit = (data) => {
    onPizzaCreated({ ...data, price });
  };

  return (
    <ContentContainer>
      <AssetsContainer
        ingredients={ingredients}
        toppingsData={[...cheeses, ...vegs, ...meats]}
      />
      <Form onSubmit={handleSubmit(onSubmit)} mb>
        <h1>Собери свою пиццу</h1>
        <StandartSetContainer>
          <SmallContainer>
            <h3>Размер</h3>
            <RadioGroup ref={register} name={"size"} items={[SIZE]} />
          </SmallContainer>
          <SmallContainer>
            <h3>Тесто</h3>
            <RadioGroup ref={register} name={"dough"} items={[DOUGH]} />
          </SmallContainer>
        </StandartSetContainer>
        <SaucesContainer>
          <h3>Выберите соус</h3>
          <SaucesRadioContainer className="saucesRadioContainer">
            <RadioGroup ref={register} name={"sauces"} items={[SAUCE]} />
          </SaucesRadioContainer>
        </SaucesContainer>
        <ToppingsContainer>
          <h3>Добавьте сыр</h3>
          <Toppings
            className="cheeseToppingsContainer"
            ref={register}
            topping={cheeses}
            checked={ingredients.cheese}
          />
        </ToppingsContainer>
        <ToppingsContainer>
          <h3>Добавьте овощи</h3>
          <ScrollToppingsContainer className="scrollToppingsContainer">
            <Toppings
              ref={register}
              topping={vegs}
              checked={ingredients.vegetables}
            />
          </ScrollToppingsContainer>
        </ToppingsContainer>
        <ToppingsContainer>
          <h3>Добавьте мясо</h3>
          <ScrollToppingsContainer className="scrollToppingsContainer">
            <Toppings
              ref={register}
              topping={meats}
              checked={ingredients.meat}
            />
          </ScrollToppingsContainer>
        </ToppingsContainer>
        <ButtonContainer className="buttonContainer">
          <Button>Заказать за {price} руб</Button>
        </ButtonContainer>
      </Form>
    </ContentContainer>
  );
};
