import { HeaderContainer } from "./HeaderContainer";
import { OrderCard } from "./OrderCard/OrderCard";
import { ContentContainer } from "./style";

export const OrderList = ({ orders }) => {
  return (
    <>
      <HeaderContainer />
      <ContentContainer>
        {orders &&
          orders.map((order, i) => (
            <OrderCard key={order.id} order={order} id={i} />
          ))}
      </ContentContainer>
    </>
  );
};
