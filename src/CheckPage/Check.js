import React from "react";
import { HeaderContainer } from "./HeaderContainer";
import { OrderCard } from "./OrderCard";
import { OrderStatus } from "./OrderStatus";
import { ContentContainer } from "./style";

export const Check = ({ pizza, cheeses, vegs, meats }) => {
  return (
    <>
      <HeaderContainer />
      <ContentContainer>
        <OrderStatus />
        <OrderCard
          orderData={pizza}
          toppingsData={[...cheeses, ...vegs, ...meats]}
        />
      </ContentContainer>
    </>
  );
};
