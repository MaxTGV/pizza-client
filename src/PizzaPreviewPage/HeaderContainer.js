import React from "react";
import styled from "styled-components";
import { Header } from "../shared/component/Header";
import close from "../img/close.svg";
import { Link } from "react-router-dom";

const Title = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  width: 264px;
  width: 62%;
  text-align: right;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const HeaderContainer = () => {
  return (
    <Header>
      <Title>Оформление заказа</Title>
      <StyledLink to="/">
        <img src={close} alt="alt" />
      </StyledLink>
    </Header>
  );
};
