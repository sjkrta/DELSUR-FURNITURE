import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow: auto;
  overscroll-behavior-inline: contain;
  grid-template-rows: min-content;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline:1rem;
  & > *{
    scroll-snap-align: start;
  }
  &::-webkit-scrollbar{
    width: 1rem;
  }
  &::-webkit-scrollbar-track{
    display: none;
  }
  &::-webkit-scrollbar-thumb {
  background-color: #dadada;
  border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: #c8c8c8;
  }
  ${mobile({ })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </Container>
  );
};

export default Categories;
