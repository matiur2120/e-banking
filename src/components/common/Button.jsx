import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

const Button = styled(LinkS)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  margin-top: 20px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "18px 48px" : "12px 28px")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  font-size: ${({ big }) => (big ? "24px" : "14px")};
  outline: none;
  border: none;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    background: green;
  }
`;

export default Button;
