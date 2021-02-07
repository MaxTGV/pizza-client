import React from "react";
import { Header } from "../shared/component/Header";
import arrowleft from "../img/arrow-left.svg";
import logout from "../img/logout.svg";
import { TitleContainer, StyledLink, LogoutContainer } from "./style";

export const HeaderContainer = () => {
  return (
    <Header>
      <TitleContainer>
        <StyledLink to="/">
          <img src={arrowleft} alt="alt" />
          <p>Назад</p>
        </StyledLink>
        <h3>Авторизация</h3>
      </TitleContainer>
      <StyledLink to="/">
        <LogoutContainer>
          <img src={logout} alt="alt" />
          <p>Выйти</p>
        </LogoutContainer>
      </StyledLink>
    </Header>
  );
};
