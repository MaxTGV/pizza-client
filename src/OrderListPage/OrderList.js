import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { getLogin } from "../LoginPage/state/selectors";
import { getOrderList } from "../shared/api";
import { Navbar } from "../shared/component/Navbar";
import styled from "styled-components";
import arrowLeft from "../img/icn_arrow-left.png";
import exclude from "../img/Exclude.png";
import { SIZE, DOUGH, SAUCE } from "../shared/pizzaData";

const Title = styled.p`
  font-family: Rounded Mplus 1c;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const OrderItem = styled.div`
  width: 328px;
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  margin: 0px 16px;
`;

const OrderInfo = styled.div`
  width: 281px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 4px 16px;
`;

const OrderTitle = styled.p`
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin: 0;
  padding: 4px 16px;
`;

const OrderDescription = styled.p`
  width: ${(props) => props.w}px;
  height: auto;
  font-family: M PLUS Rounded 1c ExtraBold;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 8px 0px;
  padding: 0px ${(props) => props.padding}px;
`;

export const OrderList = () => {
  const { isLoading, isError, data, error } = useQuery(
    "ingredient",
    getOrderList
  );

  const status = useSelector(getLogin);

  if (!status.login) {
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>ERROR: {JSON.stringify(error)}</>;
  }

  const orderDate = () => {
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const newDate = `${day} января ${year}, ${hour}:${minute}`;
    return newDate;
  };

  return (
    <>
      <Navbar>
        <StyledLink to="/">
          <img src={arrowLeft} alt="alt" />
        </StyledLink>
        <Title>Заказы</Title>
      </Navbar>
      <OrderItem>
          <OrderInfo>
            <OrderDescription w="65" padding="0">{`Заказ ${Math.floor(
              Math.random() * 10000
            )}`}</OrderDescription>
            <OrderDescription
              w="200"
              padding="0"
            >{`${orderDate()} \u00b7 В работе`}</OrderDescription>
          </OrderInfo>
          <OrderTitle>Ленивая Маргарита</OrderTitle>
        </OrderItem>
      {data.map((obj) => (
        <div key={obj.id}>
          <p>{JSON.stringify(obj)}</p>
        </div>
      ))}
    </>
  );
};
