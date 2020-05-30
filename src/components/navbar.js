import React, { Fragment, useState, useRef, useEffect } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import styled from "styled-components";

import useWindowSize from "../helpers/useWindowSize";
import { BREAKPOINTS } from "../constants/theme";
import {
  NavLink,
  ButtonLink,
  ContainerNav,
  animCloseMobileNav,
  animOpenMobileNav,
} from "./navbar.style";

const Logo = styled.div`
  height: 0.1%;
  width: 0.1%;
`;

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
          <Logo><img className="logo" src={ require('../images/logo.png') }  alt="logo"/> </Logo>
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
