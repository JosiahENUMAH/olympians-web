import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#c0bebe" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    trasnition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 12px; */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #ff2957;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid #ff2957;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    // top: 0;
    top: 30%;
    // right: 0;
    right: 30px;
    trasnform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    /* background: black; */
  }
`;

export const OpenIcon = styled(FaBars)`
  color: #fff;
  cursor: pointer;

  &.active {
    color: #ff2957;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    color: #ff2957;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid #ff2957;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;

  @media screen and (max-width: 960px) {
    /* display: none; */

    /* update */
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #c0bebe;
    backdrop-filter: blur(10px);
  }
`;

export const NavItem = styled.li`
  height: 80px;

  /* update */
  @media screen and (max-width: 960px) {
    width: auto;
    left: ${({ click }) => (click ? 0 : "-100%")};

    &:hover {
      /* border-bottom: 3px solid #ff2957; */
      border-radius: 20px;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 700;

  &.active {
    color: #ff2957;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid #ff2957;
  }

  &:hover {
    color: #ff2957;
    transition: 0.2s ease-in-out;
    /* border-bottom: 3px solid #ff2957; */
  }

  /* update */
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: white;

    &:hover {
      color: #ff2957;
      transition: all 0.3s ease;
      /* border-bottom: 3px solid #ff2957; */
    }
  }
`;

export const NavBtn = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;

    /* update */
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    /* position: relative; */
    width: 50%;
    /* height: 10px; */
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ff2957;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  /* outline: none;
  border: none; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* text-decoration: none; */

  /* update */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /* padding: 8px 16px; */
  /* height: 100%; */
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff2957;
    border: 2px solid #ff2957;
  }

  @media screen and (max-width: 960px) {
    /* padding: 10px 64px;
    font-size: 24px; */

    &:hover {
      background: #000;
      color: #fff;
      border: none;
    }
  }
`;
