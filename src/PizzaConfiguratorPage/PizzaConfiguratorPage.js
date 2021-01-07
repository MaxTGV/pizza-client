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
import logo from "../img/Logo.png";
import account from "../img/icn_account.png";
import { Navbar } from "../shared/component/Navbar";

const HeaderDiv = styled.div`
  width: 172px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.p`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: rgba(0, 168, 150, 1);
  line-height: 20px;
  margin: 0px 0px 0px 7px;
  span {
    color: #f3752b;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 3px;
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
    return <>Loading...</>;
  }

  return (
    <>
      <Navbar bg="white" jc="space-between">
        <HeaderDiv>
          <StyledLink to="/">
            <img src={logo} alt="alt" />
          </StyledLink>
          <Title>
            артём<span>пицца</span>
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
