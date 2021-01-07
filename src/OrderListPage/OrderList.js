import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getLogin } from "../LoginPage/state/selectors";
import { getOrderList } from "../shared/api";

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

  return (
    <>
      <h1>Список заказов</h1>
      {data.map((obj) => (
        <div key={obj.id}>
          <p>{JSON.stringify(obj)}</p>
        </div>
      ))}
    </>
  );
};
