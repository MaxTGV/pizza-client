import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "../shared/component/Form";
import { Input } from "../shared/component/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../shared/component/Button";
import { HeaderContainer } from "./HeaderContainer";
import { FormContainer } from "../shared/component/FormContainer";
import { useAuth0 } from "@auth0/auth0-react";

const schema = yup.object().shape({
  login: yup.string().email("Некорректный формат").required("Введите email"),
  password: yup.string().required("Введите пароль"),
});

export const Login = () => {
  const { logout } = useAuth0();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const disabled = watch("password");

  const onSubmit = (data) => {
    history.push("/");
  };

  return (
    <>
      <HeaderContainer logout={logout} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Input
            ref={register}
            id="login"
            name="login"
            type="email"
            label="E-mail"
            error={!!errors.login}
            helperText={errors?.login?.message}
          />
          <Input
            ref={register}
            id="password"
            name="password"
            type="password"
            label="Пароль"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button disabled={!disabled}>
            Войти
          </Button>
          <Button onClick={() => history.push("/registration")}>
            Регистрация
          </Button>
        </FormContainer>
      </Form>
    </>
  );
};
