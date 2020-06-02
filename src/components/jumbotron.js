import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, DARK_PURPLE, breakpoint } from "../constants/theme";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  padding: ${({ center }) => (center ? "8em 1.5em" : "5em 1.5em 1em 1.5em")};
  background-color: ${DARK_PURPLE};
  color: ${WHITE};

  ${breakpoint.down("m")`
    padding: ${({ center }) => (center ? "4em 1.5em 2.5em 1.5em" : "5em 1.5em 1em 1.5em")};
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
      margin-bottom: 0.35em;

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
