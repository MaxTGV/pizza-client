import styled from "styled-components";

const StyledOrderDescription = styled.div`
  width: initial;
  height: auto;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  white-space: pre-line;
`;

export const OrderDescription = ({ order }) => {
  const { size, dough, sauces, ingredients } = order;

  return (
    <StyledOrderDescription>
      {`${size} см на ${dough
        .slice(0, -2)
        .toLowerCase()}ом  тесте \u00b7 ${sauces} соус \u00b7 ${ingredients.replace(
        /,/g,
        " \u00b7"
      )}`}
    </StyledOrderDescription>
  );
};
