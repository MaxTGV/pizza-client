import { useEffect } from "react";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../state/ingredients/thunk";
import {
  getIsLoading,
  getIngredientsByCategory,
} from "../state/ingredients/selectors";
import { setPizza } from "../state/pizza/pizzaSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import account from "../img/icn_account.svg";
import title1 from "../img/title1.svg";
import title2 from "../img/title2.svg";
import { Navbar } from "../shared/component/Navbar";

const HeaderDiv = styled.div`
  width: 172px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Title = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img:first-child {
    margin: 0px 5px 0px 8px;
  }
  img: last-child {
    margin-top: 2px 
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

const Loader = styled.div`
  margin: 0 auto;
  padding-top: 150px; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const LoaderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li:nth-child(1) {
    animation-delay: -1s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }

  li:nth-child(2) {
    animation-delay: -0.8s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }

  li:nth-child(3) {
    animation-delay: -0.6s;
    background: rgba(0, 168, 150, 1);
    box-shadow: 0 0 50px rgba(0, 168, 150, 1);
  }
`;

const LoaderItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: glow 1.6s ease-in-out infinite;
`;

export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegs = useSelector(getIngredientsByCategory("vegetables"));
  const meats = useSelector(getIngredientsByCategory("meat"));

  const history = useHistory();

  const onPizzaChange = (pizza) => {
    dispatch(setPizza(pizza));
    history.push("/payment");
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (isLoading) {
    return (
    <Loader>
      <LoaderList>
        <LoaderItem></LoaderItem>
        <LoaderItem></LoaderItem>
        <LoaderItem></LoaderItem>
      </LoaderList>
    </Loader>
    )
  }

  return (
    <>
      <Navbar bg="white" jc="space-between">
        <HeaderDiv>
          <StyledLink to="/">
            <img src={logo} alt="alt" />
          </StyledLink>
          <Title>
            <img src={title1} alt="артем" />
            <img src={title2} alt="пицца" />
          </Title>
        </HeaderDiv>
        <StyledLink to="/login">
          <img src={account} alt="alt" />
        </StyledLink>
      </Navbar>
      <PizzaConfigurator
        cheeses={cheeses}
        vegs={vegs}
        meats={meats}
        onPizzaCreated={onPizzaChange}
      />
    </>
  );
};
