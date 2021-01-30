import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "../LoginPage/state/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../shared/component/Button";
import { Form } from "../shared/component/Form";
import { Input } from "../shared/component/Input";
import { HeaderContainer } from "./HeaderContainer";
import { FormContainer } from "../shared/component/FormContainer";
import { useAuth0 } from "@auth0/auth0-react";

const schema = yup.object().shape({
  login: yup.string().required("Введите логин"),
  password: yup.string().required("Введите пароль"),
});

export const Registration = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(setLogin(isAuthenticated));

  const onSubmit = (data) => {
    dispatch(setLogin(true));
    history.push("/");
  };

  return (
    <>
      <HeaderContainer logout={logout} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Input
            ref={register}
            name="login"
            type="text"
            label="Логин"
            error={!!errors.login}
            helperText={errors?.login?.message}
          />
          <Input
            ref={register}
            name="password"
            type="password"
            label="Пароль"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button auth>Зарегистрироваться</Button>
          <Button auth onClick={() => loginWithRedirect()}>
            Регистрация по номеру телефона
          </Button>
        </FormContainer>
      </Form>
    </>
  );
};