import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
`;

const DashboardTitle = styled.div`
text-align: center;
  font-size: 1.7rem;
  color: purple;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ContainerWrapper = styled.div`
background-color: white;
padding: 2rem;
margin: 2rem 0;
border-radius: 10px;
`

const Dashboard = ({ product, category, slides }) => {
  return (
    <>
      <Slider slides={slides} />
      <Container>
        <ContainerWrapper>
          <DashboardTitle>Shop by category</DashboardTitle>
          <Categories category={category} />
        </ContainerWrapper>
        <ContainerWrapper>
          <DashboardTitle>Popular Products</DashboardTitle>
          <Products product={product} />
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default Dashboard;
