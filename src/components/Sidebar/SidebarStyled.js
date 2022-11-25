// import styled from "styled-components";
// import { FaTimes } from "react-icons/fa";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// export const SidebarContainer = styled.aside`
//   position: fixed;
//   z-index: 999;
//   width: 100%;
//   height: 100%;
//   background: #fff;
//   display: grid;
//   align-items: center;
//   top: 0;
//   left: 0;
//   transition: 0.3s ease-in-out;
//   opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
//   top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

//   // @media and screen (min-width: 768px) {
//   //   display: none !important;
//   //   opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
//   //   top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
//   // }
// `;

// export const CloseIcon = styled(FaTimes)`
//   color: #000;
//   &:hover {
//     color: #ff2957;
//     transition: 0.2s ease-in-out;
//   }
// `;

// export const Icon = styled.div`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.5rem;
//   background: transparent;
//   font-size: 2rem;
//   cursor: pointer;
//   outline: none;
// `;

// export const SidebarMenu = styled.div`
//   margin-top: auto;
//   color: #000;
// `;

// export const SidebarItem = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 10px);
//   text-align: center;

//   @media screen and (max-width: 480px) {
//     grid-template-rows: repeat(6, 10px);
//   }
// `;

// export const SidebarLinks = styled(LinkS)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   text-decoration: none;
//   list-style: none;
//   trasnition: 0.2s ease-in-out;
//   color: #000;
//   cursor: pointer;

//   &:hover {
//     color: #ff2957;
//     transition: 0.2s ease-in-out;
//   }
// `;

// export const SideBtn = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const SideBtnLink = styled(LinkR)`
//   border-radius: 20%;
//   background: #ff2957;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     trasnition: all 0.2s ease-in-out;
//     background: #000;
//     color: #fff;
//   }
// `;
