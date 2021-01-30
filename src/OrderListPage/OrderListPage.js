import { OrderList } from "./OrderList";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getLogin } from "../LoginPage/state/selectors";
import { getOrderList } from "../shared/api";
import { Redirect } from "react-router-dom";
import { Loader } from "../shared/component/Loader";

export const OrderListPage = () => {
  const { isLoading, isError, data, error } = useQuery(
    "ingredient",
    getOrderList
  );

  const status = useSelector(getLogin);

  if (!status.login) {
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <>ERROR: {JSON.stringify(error)}</>;
  }

  return <OrderList orders={data} />;
};
