import { ShoppingCartOutlined } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { ratingStarGen } from "../ratingStarGen";
import { CircularProgress } from "@material-ui/core";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import axios from "axios";

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
  &:hover{
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div``;

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

const Input = styled.input`
  padding: 0.5rem;
  max-width: 230px;
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

const Form = styled.form``;

const Product = ({ productUrl }) => {
  let { productId } = useParams();
  const [productItem, setProductItem] = useState(null);
  const [error, setError] = useState(null);
  const [productItemState, setProductItemState] = useState({
    stock: 1,
    size: null,
    color: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (productItemState.size === null || productItemState.color === null) {
      console.log("Missing Field");
      setError(true);
    } else {
      console.log(productItemState);
      setError(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProductItemState({
      ...productItemState,
      [name]: value,
    });
  }

  useEffect(() => {
    axios.get(`${productUrl}${productId}`).then((res) => {
      setProductItem(res.data);
    });
  }, []);

  return (
    <>
      {productItem === null ? (
        <CircularProgress />
      ) : (
        <Container>
          <ImgContainer>
            {productItem.images !== [] ? (
              productItem.images.map((item) => (
                <Image src={item.image} key={item.id} />
              ))
            ) : (
              <></>
            )}
          </ImgContainer>
          <InfoContainer>
            <Title>{productItem.name}</Title>
            <Ratings>
              {ratingStarGen(productItem.rating)}{" "}
              <RatingsCount>|{productItem.numReviews}|</RatingsCount>
            </Ratings>
            <Price>$ {productItem.price}</Price>
            <Form onSubmit={handleSubmit}>
              <ActionContainer>
                <Filter>
                  <FilterTitle>COLOR</FilterTitle>
                  <FilterSelect
                    defaultValue="SELECT"
                    name="color"
                    onChange={handleChange}
                  >
                    <FilterOption disabled>SELECT</FilterOption>
                    {productItem.colors.map((item) => (
                      <FilterOption value={item.id} key={item.id}>
                        {item.color}
                      </FilterOption>
                    ))}
                  </FilterSelect>
                </Filter>
                <Filter>
                  <FilterTitle>SIZE</FilterTitle>
                  <FilterSelect
                    defaultValue="SELECT"
                    name="size"
                    onChange={handleChange}
                  >
                    <FilterOption disabled>SELECT</FilterOption>
                    {productItem.types.map((item) => (
                      <FilterOption value={item.id} key={item.id}>
                        {item.name}
                      </FilterOption>
                    ))}
                  </FilterSelect>
                </Filter>
                <Filter>
                  <FilterTitle>Quantity</FilterTitle>
                  <Input
                    type="number"
                    name="stock"
                    min="1"
                    onChange={handleChange}
                    max={productItem.stock}
                    value={productItemState.stock}
                  />
                </Filter>
                <Button type="submit">
                  ADD TO CART <ShoppingCartOutlined />
                </Button>
              </ActionContainer>
            </Form>
            <Stack sx={{ width: "100%" }} spacing={2}>
              {error !== null &&
                (error ? (
                  <Alert severity="error">
                    Missing Fields
                  </Alert>
                ) : (
                  <Alert severity="success">
                    Item added to cart.
                  </Alert>
                ))}
            </Stack>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export default Product;
