import React from "react";
import styled from "styled-components";
import plate from "../../img/Assets/plate.svg";
import { AssetsDescription } from "./AssetDescription";
import { BaseAssetComponent } from "./BaseAssetComponent";
import { ToppingAssetComponent } from "./ToppingAssetComponent";

const StyledAssetsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  h1 {
    margin: 16px 0px 24px 0px;
    font-weight: 800;
    font-size: 28px;
    line-height: 36px;
  }
`;

const Assets = styled.div`
  position: relative;
  width: 300px;
  height: 270px;
`;

const PlateAsset = styled.div`
  position: absolute;
  width: 300px;
  height: 275px;
  transform: scale(0.9, 1);
  background: no-repeat center/100% url(${plate});
`;

const AssetTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  width: 328px;
  height: 28px;
  text-align: left;
`;

export const AssetsContainer = ({ ingredients, toppingsData }) => {
  const { size, dough, cheese, vegetables, meat } = ingredients;
  return (
    <StyledAssetsContainer>
      <h1>Собери свою пиццу</h1>
      <Assets className="assets">
        <PlateAsset className="plateAsset" />
        <BaseAssetComponent size={size} dough={dough} />
        <ToppingAssetComponent width="80" size={size} topping={cheese} />
        <ToppingAssetComponent width="70" size={size} topping={vegetables} />
        <ToppingAssetComponent width="75" size={size} topping={meat} />
      </Assets>
      <AssetTitle>Маргарита</AssetTitle>
      <AssetsDescription
        ingredients={ingredients}
        toppingsData={toppingsData}
      />
    </StyledAssetsContainer>
  );
};
