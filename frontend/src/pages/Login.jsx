import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

const Container = styled.div`
  background: linear-gradient(#800080a7, #ffffff);
`;
const Form = styled.form`
  max-width: 510px;
  padding: 0 25px;
  height: 100vh;
  margin: auto;
  display: grid;
  align-content: center;
  gap: 1rem;
`;
const FormTitle = styled.h1`
  color: White;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: grid;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
`;

const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.6rem;
  &:focus {
    outline: none;
  }
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
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    background-color: #630063;
  }
`;

const Info = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;

const ErrorContainer = styled.div`
  height: 1.5rem;
  text-align: center;
`;

const Error = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
  padding-top: 0.1rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.5rem;
  color: #e50000;
`;


export default function Login({ authUrl }) {
  const Icon = {
    fontSize: "1.8rem",
    position: "absolute",
    top: 5,
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(authUrl, credentials)
      .then(function (response) {
        console.log(response.data.token);
        setError(null)
      })
      .catch(function (error) {
        setError(
          "Invalid credentials. Try again."
        );
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>WELCOME</FormTitle>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <ErrorContainer>
          {error && (
            <Error>
              <Close /> {error}
            </Error>
          )}
        </ErrorContainer>
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
