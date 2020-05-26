import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, DARK_PURPLE } from "../constants/theme";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: ${({ center }) => (center ? "center" : "flex-end")};
  width: 100%;
  padding: 1em;
  height: 500px;
  background-color: ${DARK_PURPLE};
  color: ${WHITE};

  .content {
    max-width: 850px;
    h1 {
      font-size: 5em;
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
