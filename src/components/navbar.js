import React, { Fragment, useRef, useEffect } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import useWindowSize from "../helpers/useWindowSize";
import useScroll from "../helpers/useScroll";
import { BREAKPOINTS } from "../constants/theme";
import { REASONS } from "../constants/contactReasons";
import {
  NavLink,
  ButtonLink,
  ContainerNav,
  animCloseMobileNav,
  animOpenMobileNav,
  Dummy,
} from "./navbar.style";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const mobileOverlayRef = useRef();
  const logoRef = useRef();
  const { size: windowSize } = useWindowSize();
  const { scrollY } = useScroll();
  const openMobileNav = async () => {
    await animOpenMobileNav(mobileOverlayRef);
  };
  const closeMobileNav = async () => {
    await animCloseMobileNav(mobileOverlayRef);
  };

  useEffect(() => {
    if (windowSize >= BREAKPOINTS.m) {
      closeMobileNav();
    }
  }, [windowSize]);

  const renderNavItems = () => (
    <Fragment>
      <div className="left">
        <Dummy />
        <NavLink
          to="/"
          active="active"
          className={scrollY < 350 ? "logo" : "small logo"}
          ref={logoRef}
        >
          <Img
            fluid={data.logoImage.childImageSharp.fluid}
            alt="logo"
            style={{
              overflow: "visible",
              width: "6em",
              position: "fixed",
              left: "1.5em",
              top: "1.8em",
              transition: "0.2s",
            }}
          />
        </NavLink>
      </div>
      <div className="spacer"></div>
      <div className="center">
        <NavLink to="/" active="active" className="home">
          Home
        </NavLink>
        <NavLink to="/classes" active="active">
          Classes
        </NavLink>
        {/* <NavLink to="/schedule" active="active">
          Schedule
        </NavLink> */}
        <NavLink to="/location" active="active">
          Location
        </NavLink>
        <NavLink to="/contact" active="active" state={{ reason: REASONS.HIRE }}>
          Hiring
        </NavLink>
      </div>
      <div className="spacer"></div>
      <div className="right">
        <ButtonLink
          to="/contact"
          active="active"
          state={{ reason: REASONS.GROUP }}
        >
          Enroll now
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
