import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 38px;
  width: 38px;
  display: grid;
  place-items: center;
  overflow: hidden;
  display: none;
  ${mobile({display:"grid"})}
`;

const Bar = styled.div`
    height: 0.3rem;
    width: 100%;
    background-color: purple;
    border-radius: 3px;
    transition:all 0.2s ease;
  &:nth-child(1) {
    transform: translate(${(props)=>props.barStyle && "0px, 13px"}) rotate(${(props)=>props.barStyle && "45deg"});
  }
  &:nth-child(2) {
    transform: translateX(${(props)=>props.barStyle && "40px"});
  }
  &:nth-child(3) {
    transform: translate(${(props)=>props.barStyle && "0px, -13px"}) rotate(${(props)=>props.barStyle && "-45deg"});
  }
  :hover {
    cursor: pointer;
  }
`;

export default function BurgerIcon() {
  const [barStyle, setBarStyle] = useState(false);

  const handleClick = () => {
    setBarStyle(!barStyle)
  }

  return (
    <Container onClick={handleClick}>
      <Bar barStyle={barStyle}></Bar>
      <Bar barStyle={barStyle}></Bar>
      <Bar barStyle={barStyle}></Bar>
    </Container>
  );
}
