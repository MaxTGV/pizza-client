import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    & .orderCard {
      width: 50%;
    }
  }
`;

export const StyledOrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px auto;
  width: 70%;
  height: auto;
  background-color: white;
  img {
    width: 51px;
    height: 51px;
    margin: 0px 0px 24px 0px;
  }
`;

export const StatusTitle = styled.h3`
  width: 248px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1f1f33;
  margin: 8px 0px;
`;

export const StatusDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4b4b7c;
  margin: 8px 0px;
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
    margin-right: 5px;
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
