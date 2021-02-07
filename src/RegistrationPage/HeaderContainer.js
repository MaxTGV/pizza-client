import React from "react";
import { Header } from "../shared/component/Header";
import arrowleft from "../img/arrow-left.svg";
import logOut from "../img/logout.svg";
import { TitleContainer, StyledLink, LogoutContainer } from "./style";

export const HeaderContainer = ({logout}) => {
  return (
    <Header>
       <TitleContainer>
        <StyledLink to="/">
          <img src={arrowleft} alt="alt" />
          <p>Назад</p>
        </StyledLink>
      <h3>Регистрация</h3>
      </TitleContainer>
      <LogoutContainer onClick={() => logout({ returnTo: window.location.origin })}>
        <img src={logOut} alt="alt" />
        <p>Выйти</p>
      </LogoutContainer>
    </Header>
  );
};
