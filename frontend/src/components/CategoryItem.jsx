import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
  margin: 1rem;
  ${mobile({})}
`;

const Image = styled.img`
  height: 170px;
  width: 170px;
  padding: 1rem;
  border-radius: 50%;
  object-fit: contain;
  background-color: #ffc352;
  ${mobile({})}
`;

const Title = styled.p`
margin: 1rem 0;
text-align: center;
font-weight: bold;
color: purple;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to="/product/">
        <Image src={item.image} />
        <Title>{item.name}</Title>
      </Link>
    </Container>
  );
};

export default CategoryItem;
