import styled from "styled-components";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div`
  max-width: 1200px;
  padding: 25px 50px;
  margin: auto;
  ${mobile({padding:"10px"})}

`;

const Title = styled.h1`
text-align: center;
  font-size: 2rem;
  color: purple;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
`;

const FilterItems = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filter = styled.div`
  margin: 20px 0;
`;

const FilterText = styled.div`
  font-size: 1.3rem;
  padding: 0.5rem 0;
  color: purple;
`;

const Select = styled.select`
  padding: 0.5rem;
  max-width: 250px;
  background-color: transparent;
  border: 2px solid #c300ff83;
  border-radius: 10px;
  cursor: pointer;
`;
const Option = styled.option``;

const ProductList = ({product}) => {
  return (
    <Container>
      <Title>ALL PRODUCTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <FilterItems>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </FilterItems>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <FilterItems>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </FilterItems>
        </Filter>
      </FilterContainer>
      <Products product={product}/>
    </Container>
  );
};

export default ProductList;
