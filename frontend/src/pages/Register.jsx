import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Email, Lock, Person } from "@material-ui/icons";
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
  font-size: 0.9rem;
  color: #363636;
`;

export default function Register() {
  const Icon = {
    fontSize: "1.8rem",
    position: "absolute",
    top: 5,
  };
  return (
    <Container>
      <Form>
        <FormTitle>SIGN UP</FormTitle>
        <InputContainerWrapper>
          <Input type="text" name="first_name" placeholder="First Name" />
          <Input type="text" name="last_name" placeholder="Last Name" />
        </InputContainerWrapper>
        <Input type="text" name="email" placeholder="Email Address" />
        <Input type="text" name="username" placeholder="Username" />
        <Input type="password1" name="password1" placeholder="Password" />
        <Input
          type="password2"
          name="password2"
          placeholder="Confirm Password"
        />
        <ErrorContainer></ErrorContainer>
        <Info>
          By clicking <b>sign up</b>, you agree to our terms and conditions.
        </Info>
        <Button>LOGIN</Button>
        <Info>
         Already have an account?{" "}
          <Link to="/login">
            <b>Login here.</b>
          </Link>
        </Info>
      </Form>
    </Container>
  );
}
