import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  max-width: 1400px;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  margin: 1rem;
`;

const Desc = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin: 1.5rem 0;
  background-color: white;
  display: grid;
  grid-template-columns: auto max-content;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  background-color: #f3f3f3;
  border-radius: 10px 0 0 10px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #f3f3f3;
  border-radius: 0 10px 10px 0;
  border-left: 2px solid white;
  padding: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
