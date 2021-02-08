
import styled from "styled-components";
import visa from "../img/visa.svg";
import mastercard from "../img/mastercard.svg";

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 32px;
    
    & .orderCard {
      width: 37%;
      margin: 0;
      & hr {width: 100%}
    }
    & form {
      width: 55%;
      margin-right: 40px;
      & hr {width: 100%}
      & .addressForm, .paymentForm {
        width: 100%;
      }
      & .paymentSystem {left: 310px;}
      & .totalOrderForm {
        width: 35%;
        position: absolute;
        left: 475px;
        top: 205px;
        background: none;
        box-shadow: none;
        & div, hr {margin-bottom: 8px;}
        & button {margin-top: 25px;}
      }
    }
  }
  @media (min-width: 1024px) {
    form .totalOrderForm {
      width: 35%;
      position: absolute;
      left: 640px;
      top: 205px;
      background: none;
      box-shadow: none;
      & div, hr {margin-bottom: 8px;}
      & button {margin-top: 25px;}
    }
    form .paymentSystem {left: 445px;}
`;

export const StyledOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 328px;
  height: max-content;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  margin: 0 auto;
`;

export const OrderTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  width: 296px;
  height: 20px;
  align: left;
  margin-bottom: 8px;
`;

export const Line = styled.hr`
  width: 296px;
  height: 0px;
  border: dashed #e1e1ed;
  border-width: 0px 0px 1px 0px;
  margin: 16px 0px;
`;

export const OrderPrice = styled.p`
  font-weight: 800;
  line-height: 20px;
  color: #1F1F33;
`;

export const StyledPaymentForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 16px 0px 16px;
  width: 328px;
  height: auto;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #1f1f33;
    margin-bottom: 16px;
  }
`;

export const StyledPayment = styled.div`
  position: absolute;
  background: no-repeat center/60%
    url(${({ payment }) => (payment === "visa" ? visa : mastercard)});
  width: 85px;
  height: 40px;
  top: 40px;
  left: 245px;
  z-index: 1;
`;

export const CardAttribute = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  height: auto;
  & div:first-child {
    width: 104px;
    margin: 16px 0px;
  }
  & div:last-child {
    width: 64px;
    margin: 16px 0px;
  }
`;

export const StyledTotalOrderForm = styled.div`
  position: fixed;
  top: 496px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 360px;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
`;

export const TotalFormGroup = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:nth-child(4) {
    margin-bottom: 14px;
    p {
      font-weight: 500;
    }
  }
  p {
    font-size: 12px;
    line-height: 18px;
    color: #4b4b7c;
    height: 18px;
  }
`;