import React from "react";
import styled from "styled-components";

const server = process.env.REACT_APP_BACKEND_URL;

const StyledToppingAsset = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 25px;
  top: 10px;
  width: 225px;
  height: 220px;
  img {
    width: ${({size, width}) => size === 'small' ? `${width}%` : `${width*1.14}%`};
    transition: all 0.2s ease-in;
  }
`;

export const ToppingAssetComponent = ({ width, size, topping }) => {
  return (
    <>
      {topping &&
        topping.map((item, i) => (
          <StyledToppingAsset key={i} size={size} width={width}>
            <img src={`${server}/${item}.svg`} alt="topping" />
          </StyledToppingAsset>
        ))}
    </>
  );
};
/** */
