import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { WHITE, DARK_PURPLE } from "../constants/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: ${DARK_PURPLE};
  color: ${WHITE};
`;

const Jumbotron = ({ title, isMainPage = false }) => {
  return <Container></Container>;
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  isMainPage: PropTypes.bool,
};
