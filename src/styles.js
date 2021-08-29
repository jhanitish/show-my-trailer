import styled from "styled-components";

export const MainWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const TileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  scroll-behavior: smooth;
  transition: transform 1000ms ease 0s;
  padding: 0px;
  transform: initial;
`;
