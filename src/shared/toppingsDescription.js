export const toppingsDescription = (selectedToppings, toppingsData) => {
  const { cheese, vegetables, meat } = selectedToppings;

  const nameToppings = [...cheese, ...vegetables, ...meat].reduce(
    (name, topping) => {
      const toppingData = toppingsData.find((t) => t.slug === topping);
      return `${name} \u00b7 ${toppingData.name}`;
    },
    ""
  );
  return nameToppings;
};
