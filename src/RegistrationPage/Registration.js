import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setLogin } from "../LoginPage/state/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BaseButton } from "../shared/component/BaseButton";
import { Navbar } from "../shared/component/Navbar";
import { Form } from "../shared/component/Form";
import { Input } from "../shared/component/Input";
import { MainContainer } from "../shared/component/MainContainer";
import styled from "styled-components";
import arrowLeft from "../img/icn_arrow-left.svg";

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
  login: yup.string().required("Введите логин"),
  password: yup.string().required("Введите пароль"),
});

export const Registration = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setLogin(true));
    history.push("/");
  };

  return (
    <>
      <Navbar>
        <StyledLink to="/login">
          <img src={arrowLeft} alt="arrowLeft"/>
        </StyledLink>
        <Title>
          Регистрация
        </Title>
      </Navbar>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <BaseButton mt="2" mb="2">Зарегистрироваться</BaseButton>
        </Form>
      </MainContainer>
    </>
  );
};
