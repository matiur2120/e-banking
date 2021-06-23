import React from "react";
import {
  CloseIcon,
  NavLogo,
  SidebarBtn,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarTop
} from "./SidebarElements";

const Sidebar = ({ menuToggle, handleToggleMenu, handleModal }) => {
  return (
    <>
      <SidebarContainer menuToggle={menuToggle}>
        <SidebarTop>
          <NavLogo onClick='/'>V-Bank</NavLogo>
          <CloseIcon onClick={handleToggleMenu} />
        </SidebarTop>
        <SidebarMenu>
          <SidebarLink onClick={handleToggleMenu} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={handleToggleMenu} to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink onClick={handleToggleMenu} to='services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={handleToggleMenu} to='signup'>
            Sing Up
          </SidebarLink>
          <SidebarBtn onClick={handleModal}>Sing In</SidebarBtn>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
