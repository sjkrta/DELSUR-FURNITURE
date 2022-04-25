import { Badge } from "@material-ui/core";
import { SearchRounded, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import BurgerIcon from "./BurgerIcon";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  overflow: hidden;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  ${mobile({
    padding: "1rem",
    gridTemplateColumns: "max-content auto",
    justifyContent: "space-between",
  })};
`;

const Left = styled.div``;

const Center = styled.div`
  margin: 0 2rem;
  ${mobile({ display: "none" })};
`;

const Right = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  ${mobile()}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto max-content;
  border-radius: 10px;
  background-color: white;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  border: none;
  background-color: white;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  color: #3e3e3e;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: purple;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  gap: 0.2rem;
  background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  display: grid;
  max-width: 150px;
  grid-auto-flow: column;
  align-items: center;
  padding: 0.6rem;
  margin: 0 0.2rem;
  border-radius: 20px;
  font-size: 1.1rem;
  gap: 0.2rem;
  justify-self: end;
  cursor: pointer;
  color: purple;
  &:hover {
    background-color: white;
  }
`;

const LogoImage = styled.img`
  height: 35px;
`;

const UserImg = styled.img`
  height: 35px;
  border-radius: 50%;
`;

const AccountsLink = styled.div`
display: flex;
  ${mobile({ display: "none" })}
`;

const UserName = styled.div`
  font-size: 1.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${mobile({ display: "none" })}
`;

const NavMenu = styled.div`
  display: grid;
  margin: 0 1rem;
  justify-items: center;
  gap: 0.6rem;
  border-bottom: 1px solid #80808041;
`;
const BarContainer = styled.div`
  height: 38px;
  width: 38px;
  display: grid;
  place-items: center;
  overflow: hidden;
  display: none;
  ${mobile({ display: "grid" })}
`;

const Bar = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: purple;
  border-radius: 3px;
  transition: all 0.2s ease;
  &:nth-child(1) {
    transform: translate(${(props) => props.barStyle && "0px, 13px"})
      rotate(${(props) => props.barStyle && "45deg"});
  }
  &:nth-child(2) {
    transform: translateX(${(props) => props.barStyle && "40px"});
  }
  &:nth-child(3) {
    transform: translate(${(props) => props.barStyle && "0px, -13px"})
      rotate(${(props) => props.barStyle && "-45deg"});
  }
  :hover {
    cursor: pointer;
  }
`;

const Navbar = ({ isAuthenticated }) => {
  const [barStyle, setBarStyle] = useState(false);

  const handleClick = () => {
    setBarStyle(!barStyle);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <LogoImage src="https://sjkrta.github.io/sjkrta/brand.png" />{" "}
              ELSUR.
            </Logo>
          </Link>
        </Left>
        <Center>
          <Form onSubmit={handleForm}>
            <Input type="text" id="search" />
            <Button type="submit">
              <SearchRounded />
            </Button>
          </Form>
        </Center>
        <Right>
          <Link to="/cart/">
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{ fontSize: "1.8rem" }} />
              </Badge>
            </MenuItem>
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile/">
                <MenuItem>
                  <UserImg src="https://yt3.ggpht.com/a/AATXAJxfcC93ayTXatJcZ_XDjj0-jFf4HfVRKxW6Vw=s900-c-k-c0xffffffff-no-rj-mo" />
                  <UserName>Suraj Kumar thapa</UserName>
                </MenuItem>
              </Link>
            </>
          ) : (
            <AccountsLink>
              <Link to="/register">
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>Sign In</MenuItem>
              </Link>
            </AccountsLink>
          )}
          <BarContainer onClick={handleClick}>
            <Bar barStyle={barStyle}></Bar>
            <Bar barStyle={barStyle}></Bar>
            <Bar barStyle={barStyle}></Bar>
          </BarContainer>
        </Right>
      </Wrapper>
      {barStyle && (
        <NavMenu>
          <Form onSubmit={handleForm}>
            <Input type="text" id="search" />
            <Button type="submit">
              <SearchRounded />
            </Button>
          </Form>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
        </NavMenu>
      )}
    </Container>
  );
};

export default Navbar;
