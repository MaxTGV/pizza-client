import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setLogin } from "./state/actions";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setLogin(true));
    history.push("/");
  };

  return (
    <>
      <h3>Страница авторизации</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Авторизация</legend>
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
          <button>Авторизоваться</button>
        </fieldset>
      </form>
      <Link to="/registration">Регистрация</Link>
    </>
  );
};
