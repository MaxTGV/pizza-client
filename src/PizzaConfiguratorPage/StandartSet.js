export const StandartSet = ({ register, name, ...props }) => {
  return (
    <>
      <fieldset>
        <legend>Размер</legend>
        <label htmlFor="small">
          <input ref={register} id="small" value="small" name={name[0]} {...props} />
          30 см
        </label>
        <label htmlFor="large">
          <input ref={register} id="large" value="large" name={name[0]} {...props} />
          35 см
        </label>
      </fieldset>

      <fieldset>
        <legend>Тесто</legend>
        <label>
          <input ref={register} value="thin" name={name[1]} {...props} />
          Тонкое
        </label>
        <label>
          <input ref={register} value="lush" name={name[1]} {...props} />
          Толстое
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите соус</legend>
        <label>
          <input ref={register} value="tomato" name={name[2]} {...props} />
          Томатный
        </label>
        <label>
          <input ref={register} value="white" name={name[2]} {...props} />
          Белый
        </label>
        <label>
          <input ref={register} value="spicy" name={name[2]} {...props} />
          Острый
        </label>
      </fieldset>
    </>
  );
};
