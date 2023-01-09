import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyled";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiFlamingTrident } from "react-icons/gi";

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
            {/* <img src={Logo} alt="" /> */}
            <GiFlamingTrident style={{ color: "#ff2957" }} size={60} />
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
                to="channels"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Channels
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="membership"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Membership
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={handleClick}
                click={click}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
