import React from "react";
import { Header } from "../../shared/component/Header";
import { LoginIcon } from "./LoginIcon";
import { Logo } from "./Logo";

export const HeaderContainer = () => {
  return (
    <Header>
        <Logo/>
        <LoginIcon/>
    </Header>
  );
};