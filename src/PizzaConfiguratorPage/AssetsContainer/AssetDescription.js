import { SIZE, DOUGH, SAUCE } from "../../shared/pizzaData";
import styled from 'styled-components';
import { toppingsDescription } from "../../shared/toppingsDescription";

const StyledAssetsDescription = styled.p`
  width: 328px;
  height: auto;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 6px 0px 0px 0px;
  white-space: pre-line;
`;

export const AssetsDescription = ({ingredients, toppingsData}) => {
    const {size, dough, sauces} = ingredients;
    return (
        <StyledAssetsDescription>
        {`${SIZE[size].name} см на ${DOUGH[dough].name
          .slice(0, -2)
          .toLowerCase()}ом  тесте \n ${
          SAUCE[sauces].name
        } соус ${toppingsDescription(ingredients, toppingsData)}`}
      </StyledAssetsDescription>
    )
}