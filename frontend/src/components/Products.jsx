import styled from "styled-components";
import Loading from "./Loading";
import Product from "./Product";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap:2rem;
    border-radius: 10px;
    padding: 1.5rem;
`;

const Products = ({product}) => {
  return (
    <Container>
      {product===null?<center><Loading/></center>:
      product.map((item) => (
        <Product item={item} key={item.id} />
      ))
}
    </Container>
  );
};

export default Products;
