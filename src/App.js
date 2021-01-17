import React from "react";
import { Route, Switch } from "react-router-dom";
import { PizzaConfiguratorPage } from "./PizzaConfiguratorPage";
import { PizzaPreviewPage } from "./PizzaPreviewPage";
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegistrationPage";
import { OrderListPage } from "./OrderListPage";
import { CheckPage } from "./CheckPage";

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PizzaConfiguratorPage />
        </Route>
        <Route path="/payment">
          <PizzaPreviewPage />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/check">
          <CheckPage />
        </Route>
        <Route path="/orderlist">
          <OrderListPage />
        </Route>
      </Switch>
    </>
  );
}
