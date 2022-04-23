import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Lock, Person } from "@material-ui/icons";
import { positions } from "@mui/system";

const Container = styled.div`
  background: linear-gradient(90deg, #fec4c4, #d1d1ff);
`;
const Form = styled.form`
  display: grid;
  max-width: 500px;
  padding: 0 25px;
  height: 100vh;
  margin: auto;
  align-content: center;
  gap: 1rem;
  justify-content: center;
`;
const FormTitle = styled.h1`
  color: purple;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: grid;
  justify-content: center;
  font-weight: bolder;
`;
const InputContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  -webkit-box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.2);
  box-shadow:1px 2px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.6rem;
  &:focus {
    outline: none;
  }
`;
const ErrorContainer = styled.div`
  height: 1rem;
`;
const Button = styled.button`
  width: 50%;
  justify-self: center;
  border: none;
  padding: 0.7rem 1rem;
  background-color: purple;
  color: white;
  border-radius: 5px;
  font-size: 1.1rem;
  letter-spacing:1px;
  &:hover{
      cursor: pointer;
      background-color: #630063;
  }
`;
const Info = styled.p`
  text-align: center;
`;

export default function Login() {
  const Icon = {
    fontSize: "1.8rem",
    position: "absolute",
    top: 5
  };
  return (
    <Container>
      <Form>
        <FormTitle>WELCOME</FormTitle>
        <Input type="text" name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <ErrorContainer></ErrorContainer>
        <Info>
          <Link to="/reset">
            <b>Forgot password?</b>
          </Link>
        </Info>
        <Button>LOGIN</Button>
        <Info>
          Don't have an account yet?{" "}
          <Link to="/register">
            <b>Sign up now.</b>
          </Link>
        </Info>
      </Form>
    </Container>
  );
}
