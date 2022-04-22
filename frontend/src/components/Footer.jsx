import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Main = styled.div`
  margin-top: 2rem;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  max-width: 1400px;
  margin: auto;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: purple;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  text-align: center;
  flex: 2;
  display: grid;
  justify-content: space-between;
  padding: 20px;
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Main>
      <Container>
        <Left>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Kitchen</ListItem>
            <ListItem>Living Room</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Left>
        <Center>
          <Logo>Delsur Furniture.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 123 Random st, NSW
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> contact@sjkrta.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </Main>
  );
};

export default Footer;
