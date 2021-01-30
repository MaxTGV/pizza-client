import React from "react";
import styled from "styled-components";
import { Header } from "../shared/component/Header";
import arrowleft from "../img/arrow-left.svg";
import logOut from "../img/logout.svg";
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
`;

const StyledDiv = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = ({logout}) => {
  return (
    <Header>
      <StyledLink to="/">
        <img src={arrowleft} alt="alt" />
      </StyledLink>
      <Title>Регистрация</Title>
      <StyledDiv onClick={() => logout({ returnTo: window.location.origin })}>
        <img src={logOut} alt="alt" />
      </StyledDiv>
    </Header>
  );
};
