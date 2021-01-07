export const Toppings = ({ register, topping, legend, ...props }) => {
  return (
    <>
      <fieldset>
        <legend>Добавьте {legend}</legend>
        {topping.map((item) => (
          <label key={item.id}>
            <input
              ref={register}
              value={item.slug}
              name={item.category}
              {...props}
            />
            {item.name}
          </label>
        ))}
      </fieldset>
    </>
  );
};