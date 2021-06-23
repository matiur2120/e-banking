import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in;
  background: ${({ setColor }) => (setColor ? "#000" : null)};
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 0 2rem;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.5rem;
`;
export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
export const NavLinkContainer = styled.li``;
export const NavLink = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  margin: 0 1rem;
  padding: 0 5px;
  font-size: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: gray;
  }
  &.active {
    border-bottom: 3px solid blue;
  }
`;

export const MobileMenuIcon = styled(CgMenu)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export const SingInButton = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
export const NavBtn = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px !important;
  background: green;
  padding: 6px 12px;
  border-radius: 50px;
  margin-left: 40px;
  white-space: nowrap;

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-2px);
    background: #4dff4d;
    color: #1a0000;
  }
`;
