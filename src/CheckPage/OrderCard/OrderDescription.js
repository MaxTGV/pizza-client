import { SIZE, DOUGH, SAUCE } from "../../shared/pizzaData";
import styled from "styled-components";
import { toppingsDescription } from "../../shared/toppingsDescription";

const StyledOrderDescription = styled.div`
  width: initial;
  height: auto;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  white-space: pre-line;
`;

export const OrderDescription = ({ orderData, toppingsData }) => {
  const { size, dough, sauces } = orderData;
  return (
    <StyledOrderDescription>
      {`${SIZE[size].name} см на ${DOUGH[dough].name
        .slice(0, -2)
        .toLowerCase()}ом  тесте \u00b7 ${
        SAUCE[sauces].name
      } соус ${toppingsDescription(orderData, toppingsData)}`}
    </StyledOrderDescription>
  );
};
