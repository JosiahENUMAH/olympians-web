import React from "react";
import Logo from "../../images/Logo.svg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Nav,
} from "./LogInStyled";

const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Nav>
            <Icon to="/">
              <img src={Logo} alt="" />
            </Icon>
          </Nav>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput id="email" type="email" required />
              <FormLabel htmlFor="password">Passwordl</FormLabel>
              <FormInput id="password" type="password" required />
              <FormButton type="submit">Welcome Back</FormButton>
              <Text href="">Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
