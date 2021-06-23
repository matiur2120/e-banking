import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileMenuIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavLink,
  NavLogo,
  NavMenu
} from "./NavbarElements";

const Navbar = ({ menuToggle, handleToggleMenu, handleModal }) => {
  const [navColor, setNavColor] = useState(false);
  const handeNavColor = () => {
    if (window.scrollY >= 60) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handeNavColor);

    return () => {
      window.removeEventListener("scroll", handeNavColor);
    };
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav setColor={navColor}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            {" "}
            V-Bank
          </NavLogo>
          <NavMenu>
            <NavLink
              to='about'
              activeClass='active'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              About
            </NavLink>
            <NavLink
              to='discover'
              activeClass='active'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Discover
            </NavLink>
            <NavLink
              to='services'
              activeClass='active'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Services
            </NavLink>
            <NavLink
              to='signup'
              activeClass='active'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Sing Up
            </NavLink>
            <NavBtn
              onClick={handleModal}
              activeClass='active'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-60}
            >
              Sign In
            </NavBtn>
          </NavMenu>
          <MobileMenuIcon onClick={handleToggleMenu} />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
