import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { calculatePrice } from "../shared/calculatePrice";
import { Button } from "../shared/component/Button";
import { Form } from "../shared/component/Form";
import { RadioGroup } from "./RadioGroup";
import { Toppings } from "./Toppings";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import { Container } from "../shared/component/Container";
import { AssetsContainer } from "./AssetsContainer";

const StandartSetContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 14px;
  margin: 12px 0px;
  width: 360px;
  height: auto;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 156px;
  height: 56px;
  overflow: hidden;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

const SaucesContainer = styled(StandartSetContainer)`
  flex-direction: column;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

const SaucesRadioContainer = styled.div`
  height: 35px;
  overflow-x: scroll;
`;

const ToppingsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 14px;
  margin: 12px 0px;
  width: 360px;
  height: auto;
  h3 {
    padding-bottom: 4px;
    font-weight: 500;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

const ScrollToppingsContainer = styled.div`
  width: 328px;
  height: auto;
  overflow-x: scroll;
  scrollbar-width: thin;
`;

const ButtonContainer = styled(Container)`
  margin: 0 auto;
  position: fixed;
  top: 576px;
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
    <>
      <AssetsContainer
        ingredients={ingredients}
        toppingsData={[...cheeses, ...vegs, ...meats]}
      />
      <Form onSubmit={handleSubmit(onSubmit)} mb>
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
          <SaucesRadioContainer>
            <RadioGroup ref={register} name={"sauces"} items={[SAUCE]} />
          </SaucesRadioContainer>
        </SaucesContainer>
        <ToppingsContainer>
          <h3>Добавьте сыр</h3>
          <Toppings
            ref={register}
            topping={cheeses}
            checked={ingredients.cheese}
          />
        </ToppingsContainer>
        <ToppingsContainer>
          <h3>Добавьте овощи</h3>
          <ScrollToppingsContainer>
            <Toppings
              ref={register}
              topping={vegs}
              checked={ingredients.vegetables}
            />
          </ScrollToppingsContainer>
        </ToppingsContainer>
        <ToppingsContainer>
          <h3>Добавьте мясо</h3>
          <ScrollToppingsContainer>
            <Toppings
              ref={register}
              topping={meats}
              checked={ingredients.meat}
            />
          </ScrollToppingsContainer>
        </ToppingsContainer>
        <ButtonContainer>
          <Button>Заказать за {price} руб</Button>
        </ButtonContainer>
      </Form>
    </>
  );
};
