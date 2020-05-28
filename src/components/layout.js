import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
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
      <Footer></Footer>
    </Fragment>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
