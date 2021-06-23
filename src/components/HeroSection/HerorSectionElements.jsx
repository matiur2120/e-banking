import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  color: #fff;
`;
export const HeroContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: clamp(2rem, 6vw, 6rem);
    text-align: center;
  }
  p {
    font-size: 14px;
    padding: 8px 10px;
    text-align: center;
  }
`;
export const HeroBtn = styled(Link)`
  width: 200px;
  height: 60px;
  background: #fff;
  color: #000;
  white-space: nowrap;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
