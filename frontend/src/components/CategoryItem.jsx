import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
  margin: 1rem;
  ${mobile({})}
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid #ffecff;
  object-fit: contain;
  ${mobile({})}
`;

const Title = styled.p`
margin: 1rem 0;
text-align: center;
font-weight: bold;
color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to="/product/">
        <Image src={item.img} />
        <Title>{item.title}</Title>
      </Link>
    </Container>
  );
};

export default CategoryItem;
