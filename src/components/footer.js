import React from "react";
import styled from "styled-components";

import { WHITE, DARK_PURPLE } from "../constants/theme";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12em 1.5em 6em 1.5em;
  background-color: ${DARK_PURPLE};
  box-sizing: border-box;

  .copyright {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.8em;
    color: ${WHITE};
  }
`;
const Footer = () => (
  <Container>
    <div className="copyright">2001-2020 © VnS Academy </div>
  </Container>
);

export default Footer;
