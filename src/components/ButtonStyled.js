import styled from "styled-components";
// import { Link } from "react-scroll";

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#ff2957")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ white }) => (white ? "#000" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ff2957" : "#fff")};
    color: #000;
    border: 3px solid #ff2957;
  }
`;
