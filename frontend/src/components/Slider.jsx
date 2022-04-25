import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import LoadingAnimation from "./LoadingAnimation";

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #8b458b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Sliders = styled.div`
  width: 100vw;
  background: linear-gradient(${(props) => props.bg_color}, #ffffff16);
`;
const Content = styled.div`
  text-align: center;
  padding: 1.5rem;
`;
const Slide = styled.div`
  max-width: 1400px;
  padding: 40px;
  margin: auto;
  position: relative;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  ${mobile({ height: "250px" })}
`;

const Title = styled.h1`
  font-size: 2.7rem;
  color: purple;
`;

const Desc = styled.p`
  margin: 20px 10px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1rem;
  border: none;
  background-color: #9d009d;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    background-color: purple;
  }
  ${mobile({ fontSize: "10px" })}
`;

const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    const slide = slides.length - 1;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slide);
    } else {
      setSlideIndex(slideIndex < slide ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      {slides === null ? (
        <center>
          <LoadingAnimation />
        </center>
      ) : (
        <Container>
          <Wrapper slideIndex={slideIndex}>
            {slides.map((item) => (
              <Sliders key={item.id} bg_color={item.bg_color}>
                <Slide>
                  <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowBack />
                  </Arrow>
                  <Image src={item.image} />
                  <Content>
                    <Title>{item.title}</Title>
                    <Desc>{item.description}</Desc>
                    <Button>SHOW NOW</Button>
                  </Content>
                  <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowForward />
                  </Arrow>
                </Slide>
              </Sliders>
            ))}
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Slider;
