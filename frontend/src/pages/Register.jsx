import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Check, Close } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  background: linear-gradient(#800080a7, #ffffff);
`;
const Form = styled.form`
  max-width: 650px;
  padding: 25px 25px;
  min-height: 100vh;
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
const InputContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  ${mobile({gridTemplateColumns:"1fr"})}
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

const Success = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
  padding-top: 0.1rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.5rem;
  color: green;
`;

const ErrorContainer = styled.div`
  height: 1.7rem;
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
  color: #363636;
`;
const InputContainer = styled.div`
  display: grid;
  align-content: center;
  padding: 0 70px;
  ${mobile({padding: "0 0.5rem"})}
`;

export default function Register({ usersUrl, apiUrl }) {
  const Icon = {
    fontSize: "1.8rem",
    position: "absolute",
    top: 5,
  };
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const [password1, setpassword1] = useState(null);
  const [password2, setpassword2] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const passwordValidator = (password1) => {
    if (password1.length === 0) {
      setPasswordError(null);
    } else {
      if (password1.length < 8) {
        setPasswordError("Password is at least 8 character long.");
      } else if (password1.length >= 8) {
        // if (password1.match(/[a-z]/g) && password1.match(/[A-Z]/g) && password1.match(/[0-9]/g)) {
        if (
          (password1.match(/[a-z]/g) || password1.match(/[A-Z]/g)) &&
          password1.match(/[0-9]/g)
        ) {
          if (password1 === password2) {
            setCredentials({
              ...credentials,
              ["password"]: password1,
            });
            setPasswordError("");
          } else {
            setPasswordError("Passwords do not match.");
          }
          return null;
        } else {
          setPasswordError("Password must contain a letter or number.");
        }
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password1") {
      setpassword1(value);
      passwordValidator(value);
    }
    if (name === "password2") {
      setpassword2(value);
      if (passwordValidator(password1) === null) {
        if (password1 === value) {
          setPasswordError("");
          setCredentials({
            ...credentials,
            ["password"]: password1,
          });
        } else {
          setPasswordError("Passwords do not match.");
        }
      }
    }
    if (name === "username") {
      axios.get(`${apiUrl}una/${e.target.value}/`).then((res) => {
        if (res.data.data !== 0) {
          setUsernameError("Username is already taken.");
        } else {
          setUsernameError("");
        }
      });
    }
    if (name !== "password1" && name !== "password2") {
      setCredentials({
        ...credentials,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios.post(usersUrl, credentials);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>SIGN UP</FormTitle>
        <InputContainer>
          <InputContainerWrapper>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </InputContainerWrapper>
          <ErrorContainer></ErrorContainer>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <ErrorContainer></ErrorContainer>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <ErrorContainer>
            {usernameError && (
              <Error>
                <Close /> {usernameError}
              </Error>
            )}
            <Success>
              {" "}
              {usernameError === "" && (
                <>
                  <Check /> Username is available.
                </>
              )}
            </Success>
          </ErrorContainer>

          <InputContainerWrapper>
            <Input
              type="password"
              name="password1"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </InputContainerWrapper>
          <ErrorContainer>
            {passwordError && (
              <Error>
                <Close /> {passwordError}
              </Error>
            )}
            <Success>
              {" "}
              {passwordError === "" && (
                <>
                  <Check /> Passwords are matching.
                </>
              )}
            </Success>
          </ErrorContainer>
        </InputContainer>
        <Info>
          By clicking <b>sign up</b>, you agree to our terms and conditions.
        </Info>
        <Button>
          <Link to="/login" style={{ color: "white" }}>
            SIGN UP
          </Link>
        </Button>
        <Info>
          Already have an account?<br/>
          <Link to="/login">
            <b>Login here.</b>
          </Link>
        </Info>
      </Form>
    </Container>
  );
}
