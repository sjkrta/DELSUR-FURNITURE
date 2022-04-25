import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import Loading from "./Loading";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  overflow: auto;
  overscroll-behavior-inline: contain;
  grid-template-rows: min-content;
  scroll-snap-type: inline mandatory;
  border-radius: 20px;
  scroll-padding-inline: 1rem;
  & > * {
    scroll-snap-align: start;
  }
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dadada;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #c8c8c8;
  }
  ${mobile({})}
`;

const Categories = ({ category }) => {
  return (
    <Container>
      {category === null ? (
        <center><Loading/></center>
      ) : (
        category.map((item) => <CategoryItem item={item} key={item.id} />)
      )}
    </Container>
  );
};

export default Categories;
