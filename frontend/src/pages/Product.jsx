import { ShoppingCartOutlined} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { popularProducts } from "../data";
import { ratingStarGen } from "../ratingStarGen";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  max-width: 1200px;
  padding: 50px;
  margin: auto;
  gap: 50px;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
`;

const Title = styled.h1`
  font-weight: 300;
  letter-spacing: 1px;
  color: purple;
`;
const Ratings = styled.div`
  display: flex;
  align-items: center;
  color: orange;
  padding: 0.5rem 0;
`;
const RatingsCount = styled.div`
  color: black;
  margin-left: 10px;
  font-size: 1.2rem;
`;
const Price = styled.p`
  font-weight: 500;
  font-size: 30px;
  padding: 0.5rem 0;
`;

const ActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
`;

const Filter = styled.div`
  display: grid;
`;

const FilterTitle = styled.h4`
  letter-spacing: 2px;
  padding: 5px 0;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  max-width: 250px;
  background-color: transparent;
  border: 2px solid #c300ff83;
  border-radius: 10px;
  cursor: pointer;
`;

const FilterOption = styled.option`
  cursor: pointer;
`;

const Button = styled.button`
  max-width: 250px;
  padding: 0.5rem;
  background-color: transparent;
  border: 2px solid #c300ff83;
  background-color: #c300ff11;
  border-radius: 10px;
  color: #c300ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.1rem;

  &:hover {
    background-color: #c300ff83;
    color: white;
  }
`;

const Product = () => {
  let { productId } = useParams();
  return (
    <Container>
      <ImgContainer>
        <Image src={popularProducts[productId].img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{popularProducts[productId].title}</Title>
        <Ratings>
          {ratingStarGen(popularProducts[productId].rating)}{" "}
          <RatingsCount>
            |{popularProducts[productId].ratingsCount}|
          </RatingsCount>
        </Ratings>
        <Price>$ 20</Price>
        <ActionContainer>
          <Filter>
            <FilterTitle>COLOR</FilterTitle>
            <FilterSelect>
              <FilterOption disabled selected>
                SELECT
              </FilterOption>
              <FilterOption value="darkblue">Red</FilterOption>
              <FilterOption value="gray">Black</FilterOption>
            </FilterSelect>
          </Filter>
          <Filter>
            <FilterTitle>SIZE</FilterTitle>
            <FilterSelect>
              <FilterOption disabled selected>
                SELECT
              </FilterOption>
              <FilterOption value="S">S</FilterOption>
              <FilterOption value="M">M</FilterOption>
              <FilterOption value="L">L</FilterOption>
              <FilterOption value="XL">XL</FilterOption>
            </FilterSelect>
          </Filter>
          <Filter>
            <FilterTitle>Quantity</FilterTitle>
            <FilterSelect>
              <FilterOption disabled selected>
                SELECT
              </FilterOption>
              <FilterOption value="1">1</FilterOption>
              <FilterOption value="2">2</FilterOption>
              <FilterOption value="3">3</FilterOption>
              <FilterOption value="4">4</FilterOption>
            </FilterSelect>
          </Filter>
          <Button>ADD TO CART <ShoppingCartOutlined/></Button>
        </ActionContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
