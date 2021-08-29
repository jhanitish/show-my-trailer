import React from "react";
import styled from "styled-components";
const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  border: 3px solid white;
  border-radius: 50%;
  cursor: pointer;
  background-color: unset;

  svg {
    position: relative;
    left: 2px;
    top: 2px;
    width: 22px;
    height: 22px;
  }
`;
export const Play = (props) => {
  const { onPlay = () => {} } = props;
  return (
    <Wrapper onClick={onPlay}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="-1 -1 17 18"
        id="icon-play-no-bg"
        width="30"
        height="30"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.832.386L15 8 .832 15.62m0-15.234V15.62.386z"
        />
      </svg>
    </Wrapper>
  );
};
