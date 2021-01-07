export const addNewOrder = (formdata) => {
    return fetch("http://localhost:3000/orders", {
    method: "POST",
    body: formdata,
  }).then((res) => res.json());
};

export const getOrderList = () => {
    return fetch(`http://localhost:3000/orders`).then((res) => res.json());
  };

  export const getIngredients = () => {
    return fetch(`http://localhost:3000/ingredients`).then((res) => res.json())
  };