import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, DARK_PURPLE, breakpoint } from "../constants/theme";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  padding: 1em 1.5em;
  height: 480px;
  background-color: ${DARK_PURPLE};
  color: ${WHITE};

  ${breakpoint.down("m")`
    height: 330px;
  `}

  .content {
    display: flex;
    justify-content: ${({ center }) => (center ? "center" : "flex-start")};
    align-items: ${({ center }) => (center ? "center" : "flex-end")};
    max-width: 950px;
    width: 100%;
    overflow: hidden;

    h1 {
      font-size: 5em;

      ${breakpoint.down("m")`
        font-size: 3em;
      `}
    }
  }
`;

const Jumbotron = ({ title, center = false }) => {
  return (
    <Container center={center}>
      <div className="content">
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  isMainPage: PropTypes.bool,
};

export default Jumbotron;
