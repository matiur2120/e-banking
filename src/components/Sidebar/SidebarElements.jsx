import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1b1e23;
  z-index: 1004;
  opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
  top: ${({ menuToggle }) => (menuToggle ? "0" : "-100%")};
  transition: all 0.3s ease-in;
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
export const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.5rem;
`;
export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 4px 20px;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
export const SidebarBtn = styled(Link)`
  display: block;
  max-widht: 300px;
  background: green;
  font-size: 1rem;
  margin-top: 4rem;
  padding: 10px 40px;
  border-radius: 50px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    color: gray;
  }
`;
