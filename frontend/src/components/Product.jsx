import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ratingStarGen } from "../ratingStarGen";


const Container = styled.div`
  display: grid;
`;
const InfoContainer = styled.div`
  display: grid;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 1.1rem;
  color: purple;
  letter-spacing: 1px;
  text-transform:uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  color: black;
  font-weight: bold;
  letter-spacing: 1px;
  font-size:1.2rem;
`;
const Ratings = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  color: orange;
`;

const RatingsCount = styled.div`
  color: black;
  margin-left: 10px;
  font-size: 1rem;
  color: purple;
`;
const ImgContainer = styled.div`
  flex: 1;
  flex-grow: 1;
  height: 280px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  margin-bottom: 1rem;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow:hidden;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  width:100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const itemId = `${item.id - 1}`;
  return (
    <Link to={"/product/"+itemId} style={{ flexGrow: 1 }}>
      <Container>
        <ImgContainer>
          <Circle />
          <Image src={item.img} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Ratings>
            {ratingStarGen(item.rating)} <RatingsCount>( {item.ratingsCount} )</RatingsCount>
          </Ratings>
          <Price>$ {item.price}</Price>
        </InfoContainer>
      </Container>
    </Link>
  );
};

export default Product;
