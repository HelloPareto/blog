import React, { useState } from "react";
import { Link } from "gatsby"
import styled from "styled-components";

import nav from "../data/navigation.yml"
import LogoT from "../assets/svg/Logo-t.svg"
import Logo from "../assets/svg/logo.svg"

const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex justify-between items-center container p-5" >
      <Link
        to="/"
        className="flex gap-2"
        ariaLabel="Site Logo"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        <LogoT className="hidden md:block" />
        <Logo className="md:hidden" />
      </Link>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>

      <NavBox open={navbarOpen} className="flex gap-4 items-center">
        <ul className="flex gap-2 items-center">
          {nav.map((item, i) => {
            return (
              <li key={i}>
                {item.submenu ?
                  <>
                    <button>{item.name}</button>
                    <ul className="hidden">
                      {item.submenu.map((sub, n) => (
                        <li key={n}>
                          <a href={sub.link} >{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                  :
                  <li>
                    <a href={item.link}>{item.name}</a>
                  </li>
                }
              </li>
            )
          })}
        </ul>
        <button>Hire labelers</button>
      </NavBox>
    </header>
  )
}

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

`;
const Hamburger = styled.div`
  background-color: #223;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  &::before,
  &::after {
    width: 30px;
    height: 3px;
    background-color: #223;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  &::before {
    transform: ${(props) =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  &::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }

`;
const NavBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    padding-top: 20px;
    background-color: #fff;
    top: 10vh;
    left: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
  }

`;

export default Header
