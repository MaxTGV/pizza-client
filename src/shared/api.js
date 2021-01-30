export const addNewOrder = (formdata) => {
    return fetch(`https://artem-pizza-server.herokuapp.com/orders`, {
    method: "POST",
    body: formdata,
  }).then((res) => res.json());
};

export const getOrderList = () => {
    return fetch(`https://artem-pizza-server.herokuapp.com/orders`).then((res) => res.json());
  };

  export const getIngredients = () => {
    return fetch(`https://artem-pizza-server.herokuapp.com/ingredients`).then((res) => res.json())
  };