import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
  margin: 1rem;
  max-width: 150px;
  ${mobile({margin:"0.5rem"})}
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  padding: 0.5rem;
  border-radius: 50%;
  object-fit: contain;
  background-color: #ffc352;
  ${mobile({height:"120px", width:"120px"})}
`;

const Title = styled.p`
margin: 0.5rem 0;
text-align: center;
font-weight: bold;
color: purple;
overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
${mobile({margin:"0.5rem 0"})}
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
