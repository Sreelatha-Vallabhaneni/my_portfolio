import React from "react";
import styled from "styled-components";
import RightNav from "./navBar.component";
import "./navBar.styles.css";

const StyledMenu = styled.nav`
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100%;
  text-align: justify;
  z-index: ${({ open }) => (open ? "1" : "0")};
 display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 900px) {
    display:flex;
  }
    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <RightNav/>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: fixed;
  top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2.5rem;
  background: ${({ open, theme }) => (open ? theme.body : "transparent")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
  box-shadow: none;
  left: ${({ open }) => (open ? "7rem" : "1rem")};
  @media (min-width: 900px) {
    visibility: hidden;
  }
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: rgba(250, 65, 126, 0.8);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    left: ${({ open }) => (open ? "9px" : "4px")};
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} className="menu">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const ResponsiveMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ResponsiveMenu;