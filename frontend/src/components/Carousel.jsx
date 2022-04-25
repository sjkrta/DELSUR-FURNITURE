import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  /* overflow: hidden; */
`;

const Container = styled.div`
  display: flex;
`;

const ItemWrapper = styled.div`
  width: 100vw;
  transform: translateX(${(props) => -props.index * 100 + "vw"});
  `;

const Item = styled.div`
position: relative;
  max-width: 1400px;
  margin: auto;
  background-color: ${(props) => props.bg};
  height: 500px;
`;

const Button = styled.button`
  position: absolute;
  background-color: #8000807e;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 50px;
  border-radius: 50%;
  border: none;
  width: 50px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  :hover {
    background-color: purple;
    cursor: pointer;
  }
`;

export default function Carousel() {
  const data = [
    {
      id: 1,
      bg: "red",
    },
    { id: 2, bg: "green" },
    { id: 3, bg: "yellow" },
  ];
  const [index, setIndex] = useState(0);
  const handleCarousel = (direction) => {
    if (direction === "left") {
      index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    } else {
      index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
    console.log(index);
    console.log(data);
  };
  return (
    <Main>
      <Container>
        {data.map((item) => (
          <ItemWrapper index={index}>
            
            <Item bg={item.bg}><Button direction="left" onClick={() => handleCarousel("left")}>
              <ArrowLeft />
            </Button><Button direction="right" onClick={() => handleCarousel("right")}>
              <ArrowRight />
            </Button></Item>
            
          </ItemWrapper>
        ))}
      </Container>
    </Main>
  );
}
