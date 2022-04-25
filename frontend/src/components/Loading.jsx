import styled from "styled-components";

const Center = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Wave = styled.div`
  width: 5px;
  height: 100px;
  background: rgb(255, 0, 0);
  background: linear-gradient(rgba(255, 0, 0, 1) 0%, rgba(0, 4, 255, 1) 100%);
  margin: 15px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.7s;
  }
  &:nth-child(9) {
    animation-delay: 0.8s;
  }
  &:nth-child(10) {
    animation-delay: 0.9s;
  }
  &:nth-child(11) {
    animation-delay: 0.1s;
  }
  @keyframes wave {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`;


export default function Loading() {
  return (
    <Center>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
    </Center>
  );
}
