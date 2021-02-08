import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    & .orderCard {
      width: 50%;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 460px) {
    width: 55%;
    justify-content: space-between;
  }
  & h3 {
    width: max-content;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    width: max-content;
    margin-left: 5px;
  }
  & p {
    display: none;
    overflow: hidden;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b7c;
    margin: 0px 8px;
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  p {
    display: none;
    overflow: hidden;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b7c;
    margin: 0px 8px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const StyledOrderCard = styled.div`
  width: 328px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  margin: 32px auto;
`;

export const OrderTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin-bottom: 4px;
`;

export const StyledOrderDetails = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderPrice = styled.p`
  font-weight: 800;
  line-height: 20px;
`;

export const OrderCardNumber = styled.div`
  display: flex;
  flex-direction: row;
  p {
    line-height: 20px;
    color: #1f1f33;
    margin-right: 4px;
  }
  p:last-child {
    margin-left: 5px;
  }
`;

export const OrderDelivery = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 16px;
  p {
    font-weight: 500;
    line-height: 20px;
    color: #f3752b;
    margin-left: 8px;
  }
`;

export const StyledOrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 296px;
  margin-bottom: 16px;
`;

export const OrderNumber = styled.p`
  width: 65px;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin-right: 16px;
`;

export const OrderDate = styled.p`
  width: 215px;
  font-size: 12px;
  line-height: 18px;
  color: #8181b1;
`;