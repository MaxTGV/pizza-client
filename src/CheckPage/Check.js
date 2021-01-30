import React from "react";
import { HeaderContainer } from "./HeaderContainer";
import { OrderCard } from "./OrderCard";
import { OrderStatus } from "./OrderStatus";

export const Check = ({ pizza, cheeses, vegs, meats }) => {
  return (
    <>
      <HeaderContainer />
      <OrderStatus />
      <OrderCard
        orderData={pizza}
        toppingsData={[...cheeses, ...vegs, ...meats]}
      />
    </>
  );
};
