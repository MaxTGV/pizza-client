export const addNewOrder = (formdata) => {
    return fetch("https://cnos5.sse.codesandbox.io/orders", {
    method: "POST",
    body: formdata,
  }).then((res) => res.json());
};

export const getOrderList = () => {
    return fetch(`https://cnos5.sse.codesandbox.io/orders`).then((res) => res.json());
  };

  export const getIngredients = () => {
    return fetch(`https://cnos5.sse.codesandbox.io/ingredients`).then((res) => res.json())
  };