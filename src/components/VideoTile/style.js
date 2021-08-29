import styled from "styled-components";

export const MainWarapper = styled.div`
  max-width: 1024px;
  height: 360px;
  width: 70%;
  padding: 10px;
  display: flex;
  @media only screen and (max-width: 980px) {
    width: 65%;
  }

  @media only screen and (max-width: 540px) {
    width: 50%;
  }
`;

export const VideoWrapper = styled.div`
  display: inline-flex;
  width: 90%;
  padding: 10px;
`;
