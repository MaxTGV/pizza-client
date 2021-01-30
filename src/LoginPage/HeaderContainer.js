import React from "react";
import styled from "styled-components";
import { Header } from "../shared/component/Header";
import arrowleft from "../img/arrow-left.svg";
import logout from "../img/logout.svg";
import { Link } from "react-router-dom";

const Title = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  width: 264px;
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
      <StyledLink to="/">
        <img src={arrowleft} alt="alt" />
      </StyledLink>
      <Title>Авторизация</Title>
      <StyledLink to="/">
        <img src={logout} alt="alt" />
      </StyledLink>
    </Header>
  );
};
