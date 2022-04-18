import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  padding: 50px;
  margin: auto;
`

const DashboardTitle = styled.div`
  font-size:1.7rem;
  margin: 2rem 0;
  color:purple;
  letter-spacing:1px;
  font-weight:500;
  text-transform:uppercase;
`

const Dashboard = ({product, category}) => {

  return (
    <>
    <Slider />
    <Container>
      <DashboardTitle>Shop by category</DashboardTitle>
      <Categories category={category}/>
      <DashboardTitle>Popular Products</DashboardTitle>
      <Products product={product}/>
    </Container>
    </>
  );
};

export default Dashboard;
