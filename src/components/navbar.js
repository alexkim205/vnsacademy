import React, { Fragment, useState, useRef, useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { IoIosMenu, IoMdClose } from "react-icons/io";

import useWindowSize from "../helpers/useWindowSize";
import {
  WHITE,
  DARK_PURPLE,
  BUTTON_SHADOW,
  BREAKPOINTS,
  breakpoint,
} from "../constants/theme";
import { NavLink, ButtonLink } from "./navbar.style";

const ContainerNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  padding: 1.5em;
  box-sizing: border-box;
  background-color: ${DARK_PURPLE};

  .spacer {
    flex: 1;
  }

  a.active {
    border-bottom: 2px solid ${WHITE};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background: transparent;
    border: none;
    color: white;
    overflow: hidden;

    &:hover {
      // transform: translate(0, 1px);
      // text-decoration: none;
      // box-shadow: none;
      cursor: pointer;
    }

    &:active,
    &:focused,
    &:visited {
      text-decoration: none;
      outline: none;
    }
  }

  .desktop-navbar {
    display: flex;
    align-items: center;
    ${breakpoint.down("m")`
      display: none;
    `}
    .right {
      display: flex;
    }
  }

  .mobile-navbar {
    display: flex;

    ${breakpoint.up("m")`
      display: none;
    `}

    .mobile-overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-sizing: border-box;
      background-color: ${DARK_PURPLE};
      z-index: 1;
      overflow: hidden;
      display: none;
      flex-direction: column;
      // justify-content: space-between;
      align-items: flex-start;
      padding: 1.5em;

      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .left {
          display: none;
        }

        .center {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          a {
            padding: 1em 1em;
            margin: 0;
          }
        }

        .right {
          display: none;
        }
      }

      .spacer {
        flex: 0;
      }
    }
  }
`;

const animOpenMobileNav = async el => {
  el.current.style.display = "flex";
  el.current.style.opacity = 0;
  await anime({
    targets: el.current,
    opacity: [0, 1],
    duration: 180,
    easing: "easeInSine",
  }).finished;
};

const animCloseMobileNav = async el => {
  await anime({
    targets: el.current,
    opacity: [1, 0],
    duration: 160,
    easing: "easeOutSine",
  }).finished;
  el.current.style.display = "none";
  el.current.style.opacity = 0;
};

const Navbar = () => {
  const mobileOverlayRef = useRef();
  const { size: windowSize, breakpoint: windowBreakpoint } = useWindowSize();
  const [isMobileNavOpen, setMobileNavState] = useState(false);
  const openMobileNav = async () => {
    await animOpenMobileNav(mobileOverlayRef);
    setMobileNavState(true);
  };
  const closeMobileNav = async () => {
    await animCloseMobileNav(mobileOverlayRef);
    setMobileNavState(false);
  };

  useEffect(() => {
    if (windowSize >= BREAKPOINTS.m) {
      console.log(windowSize);
      closeMobileNav();
    }
  }, [windowSize]);

  const renderNavItems = () => (
    <Fragment>
      <div className="left">
        <NavLink to="/" active="active">
          Logo
        </NavLink>
      </div>
      <div className="spacer"></div>
      <div className="center">
        <NavLink to="/location" active="active">
          Location
        </NavLink>
        <NavLink to="/classes" active="active">
          Classes
        </NavLink>
        <NavLink to="/schedule" active="active">
          Schedule
        </NavLink>
        <NavLink to="/hiring" active="active">
          Hiring
        </NavLink>
      </div>
      <div className="spacer"></div>
      <div className="right">
        <ButtonLink to="/contact" active="active">
          Enroll
        </ButtonLink>
      </div>
    </Fragment>
  );

  return (
    <ContainerNav>
      <div className="desktop-navbar">{renderNavItems()}</div>
      <div className="mobile-navbar">
        <button onClick={openMobileNav}>
          <IoIosMenu size="2em" />
        </button>
        <div className="mobile-overlay" ref={mobileOverlayRef}>
          <div className="top">
            <button onClick={closeMobileNav}>
              <IoMdClose size="2em" />
            </button>
            <ButtonLink to="/contact" active="active">
              Enroll
            </ButtonLink>
          </div>
          <div className="main">{renderNavItems()}</div>
        </div>
        <div className="spacer"></div>
        <ButtonLink to="/contact" active="active">
          Enroll
        </ButtonLink>
      </div>
    </ContainerNav>
  );
};

export default Navbar;
