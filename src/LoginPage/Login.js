import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "../shared/component/Form";
import { Input } from "../shared/component/Input";
import { setLogin } from "./state/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MainContainer } from "../shared/component/MainContainer";
import { Navbar } from "../shared/component/Navbar";
import { BaseButton } from "../shared/component/BaseButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowLeft from "../img/icn_arrow-left.png";

const Title = styled.p`
  font-family: Rounded Mplus 1c;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const schema = yup.object().shape({
  login: yup.string().email("Некорректный формат").required("Введите email"),
  password: yup.string().required("Введите пароль"),
});

export const Login = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const disabled = watch("password");

  const onSubmit = (data) => {
    dispatch(setLogin(true));
    history.push("/");
  };

  return (
    <>
      <Navbar>
        <StyledLink to="/">
          <img src={arrowLeft} alt="alt" />
        </StyledLink>
        <Title>Авторизация</Title>
      </Navbar>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <BaseButton mt="1" mb="1" disabled={!disabled}>Войти</BaseButton>
        </Form>
        <BaseButton mb="2" onClick={() => history.push("/registration")}>
          Регистрация
        </BaseButton>
      </MainContainer>
    </>
  );
};
