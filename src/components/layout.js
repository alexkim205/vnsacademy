import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
// import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./layout.css";

const Layout = ({ title, children }) => {
  const isMainPage = useLocation().pathname === "/";

  return (
    <Fragment>
      <header>
        <Navbar />
        <Jumbotron center={isMainPage} title={title} />
      </header>
      <main>{children}</main>
      <footer>2001 - 2020 © VnS Academy</footer>
    </Fragment>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
