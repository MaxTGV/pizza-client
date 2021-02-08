import React from "react";
import { Header } from "../shared/component/Header";
import arrowleft from "../img/arrow-left.svg";
import logout from "../img/logout.svg";
import { TitleContainer, LogoutContainer, StyledLink } from "./style";

export const HeaderContainer = () => {
  return (
    <Header>
      <TitleContainer>
        <StyledLink to="/">
          <img src={arrowleft} alt="arrowleft" />
          <p>Назад</p>
        </StyledLink>
        <h3>Мои заказы</h3>
      </TitleContainer>
      <StyledLink to="/">
        <LogoutContainer>
          <img src={logout} alt="logout" />
          <p>Выйти</p>
        </LogoutContainer>
      </StyledLink>
    </Header>
  );
};
