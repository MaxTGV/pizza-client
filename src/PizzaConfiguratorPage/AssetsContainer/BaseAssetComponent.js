import React from "react";
import styled from "styled-components";

const StyledBaseAssetComponent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 20px;
  top: 5px;
  width: 235px;
  height: 240px;
  img {
    width: ${({size}) => size === 'small' ? '85%' : '100%'};
    transform: ${({dough}) => dough === 'lush' ? 'scale(1,1.07)' : 'none'};
    transition: all 0.2s ease-in;
  }
`;

export const BaseAssetComponent = ({ size, dough }) => {
  return (
    <StyledBaseAssetComponent className="doughAsset" size={size} dough={dough}>
      <img src={require(`../../img/Assets/${dough}.svg`).default} alt="dough" />
    </StyledBaseAssetComponent>
  );
};