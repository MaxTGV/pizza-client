import { MainContainer } from "../shared/component/MainContainer";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";
import styled from "styled-components";

const OrderTitle = styled.p`
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin: 0;
`;

const OrderDescription = styled.p`
  width: 296px;
  height: auto;
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 8px 0px;
`;

const Line = styled.hr`
  width: 296px;
  height: 0px;
  border: dashed #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 0;
`;

const OrderPrice = styled.p`
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #4B4B7C;
`;

export const PizzaPreview = ({ newPizza, cheeses, vegs, meats }) => {
  const { size, dough, sauces, cheese, vegetables, meat, price } = newPizza;

  const toppingsDescription = () => {
    const nameToppings = [...cheese, ...vegetables, ...meat].reduce(
      (name, topping) => {
        const toppingData = [...cheeses, ...vegs, ...meats].find(
          (t) => t.slug === topping
        );
        return `${name} \u00b7 ${toppingData.name}`;
      },
      ""
    );

    return nameToppings;
  };

  return (
    <MainContainer>
      <OrderTitle>Ленивая Маргарита</OrderTitle>
      <OrderDescription>
        {`${SIZE[size].name} см на ${DOUGH[dough].name
          .slice(0, -2)
          .toLowerCase()}ом  тесте \u00b7 ${
          SAUCE[sauces].name
        } соус ${toppingsDescription()}`}
      </OrderDescription>
      <Line></Line>
      <OrderPrice>{`${price} руб`}</OrderPrice>
    </MainContainer>
  );
};
