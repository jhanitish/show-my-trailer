import styled from "styled-components";

export const Tile = styled.div`
  display: flex;
  width: 20%;
  position: relative;
  align-items: center;
  overflow: hidden;
  transition: height 0.3s ease-in 0s, width 0.3s ease-in 0s;
  margin: 20px;
  border-radius: 8px;
  ${({ active }) =>
    active &&
    `
    border: 2px solid red;
  `}
  @media only screen and (max-width: 980px) {
    width: 25%;
  }

  @media only screen and (max-width: 540px) {
    width: 40%;
  }
`;

export const TileImgWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const TileImg = styled.img`
  object-fit: cover;
  transition: visibility 0s ease 0s, opacity 0.3s linear 0s;
  opacity: 1;
  visibility: visible;
`;

export const Realease = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 42px;
  height: 42px;
  color: white;
  border: 1px solid #61c797;
  background-color: #61c797;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding-top: 7px;
  }

  span {
    display: block;
  }
`;
