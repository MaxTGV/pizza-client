import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setLogin } from "../LoginPage/state/actions";

export const Registration = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setLogin(true));
    history.push("/");
  };

  return (
    <>
      <h3>Страница регистрации</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Регистрация</legend>
          <label>
            <input
              ref={register}
              name="login"
              type="text"
              placeholder="Введите логин"
            />
          </label>
          <label>
            <input
              ref={register}
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
          </label>
          <button>Зарегистрироваться</button>
        </fieldset>
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};
