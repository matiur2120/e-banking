import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #080808;
  max-height: 300px;
  width: 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    max-height: 500px;
    padding-top: 32px;
  }
`;
export const FooterHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    padding: 0 80px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 10px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px; 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 14px;
    padding: 14px; 0;

  }
   
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterLinkH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 14px;
`;
export const FooterLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    color: gray;
  }
`;

export const FooterBottom = styled.div`
  padding: 14px 0;
  text-align: center;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    margin-bottom: -12px;
  }
`;
