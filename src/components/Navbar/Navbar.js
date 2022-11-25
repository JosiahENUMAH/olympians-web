import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo.svg";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyled";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [toggle, settoggle] = React.useState(1);

  // function   {
  //   if (toggle == 0.5) {
  //     settoggle(1);
  //   } else {
  //     settoggle(0.5);
  //   }
  //   document.body.style.opacity = toggle;
  // }

  // useEffect(() => {
  //   document.body.style.opacity = toggle;
  //   return () => {
  //     document.body.style.opacity = "";
  //   };
  // });

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={Logo} />
          </NavLogo>

          <MobileIcon
            onClick={() => {
              handleClick();
            }}
          >
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          {/* <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="vision"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Vision
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="mission"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Mission
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu> */}

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="vision"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Vision
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="mission"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Mission
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>

            <NavBtn>
              <NavBtnLink to="/login">Log In</NavBtnLink>
            </NavBtn>
          </NavMenu>
          {/* 
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
