import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import nav from "../data/navigation.yml";
import LogoT from "../assets/svg/Logo-t.svg";
import Logo from "../assets/svg/logo.svg";
import Down from "../assets/svg/down.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 767);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className=" p-5 bg-white dark:bg-[#312c35] border-b z-20 sticky top-0">
      <div class="header_inner flex justify-between items-center container">
        <Link to="/" className="flex gap-2" aria-label="Site Logo" onClick={() => setNavbarOpen(false)}>
          <LogoT className="icon hidden md:block dark:fill-white" />
          <Logo className="icon md:hidden" />
        </Link>
        <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
          <Hamburger open={navbarOpen} />
        </Toggle>
        <nav
          className={`${
            navbarOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-4 items-start md:items-center absolute md:static top-[10vh] left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 w-full md:w-auto lg:gap-8 items-center">
            {nav.map((item, i) => (
              <li key={i} className="relative group w-full md:w-auto">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 w-full md:w-auto"
                      onClick={() => {
                        if (isMobile) {
                          setOpenSubmenuIndex(openSubmenuIndex === i ? null : i);
                        }
                      }}
                    >
                      {item.name}
                      <Down
                        className={`icon transition-transform duration-200 ${
                          openSubmenuIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* desktop: show if hover */}
                    <ul
                      className={`
                        absolute top-full left-0 bg-white dark:bg-[#312c35] shadow-md min-w-[200px]
                        opacity-0 translate-y-2 pointer-events-none transition-all duration-300
                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                        hidden md:block z-50 p-4 rounded-xl
                      `}
                    >
                      {item.submenu.map((sub, n) => (
                        <li key={n}>
                          <a href={sub.link} className="block px-4 py-2 hover:bg-gray-100">
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {/* mobile submenu */}
                    {isMobile && openSubmenuIndex === i && (
                      <ul className="flex flex-col gap-2 pl-4 pt-2 md:hidden">
                        {item.submenu.map((sub, n) => (
                          <li key={n}>
                            <a href={sub.link} className="block px-4 py-2 hover:bg-gray-100">
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.link} className="block w-full md:w-auto">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li>
          <button
            className="rounded-full py-[6px] px-[18px] text-white mt-4 md:mt-0"
            style={{
              background: "linear-gradient(90deg, #6d16fb 0%, #8b6dff 100%)",
            }}
          >
            Hire labelers
          </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 767px) {
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
    transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    top: 10px;
  }

`;

export default Header;
