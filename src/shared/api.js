const server = process.env.REACT_APP_BACKEND_URL;

export const addNewOrder = (formdata) => {
    return fetch(`${server}/orders`, {
    method: "POST",
    body: formdata,
  }).then((res) => res.json());
};

export const getOrderList = () => {
    return fetch(`${server}/orders`).then((res) => res.json());
  };

  export const getIngredients = () => {
    return fetch(`${server}/ingredients`).then((res) => res.json())
  };