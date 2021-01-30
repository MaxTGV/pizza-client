import { HeaderContainer } from "./HeaderContainer";
import { OrderCard } from "./OrderCard/OrderCard";

export const OrderList = ({ orders }) => {
  return (
    <>
      <HeaderContainer />
      {orders &&
        orders.map((order, i) => (
          <OrderCard key={order.id} order={order} id={i} />
        ))}
    </>
  );
};
