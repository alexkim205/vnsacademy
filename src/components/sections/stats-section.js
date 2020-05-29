import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BaseSection from "./base.style";
import {
  LIGHT_PURPLE,
  DARK_PURPLE,
  DARK_GRAY,
  breakpoint,
} from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${LIGHT_PURPLE};

  .content {
    width: 100%;
    .stats-box {
      font-family: "Poppins", sans-serif;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;

      .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4em 0 2em 0;
        width: ${({ numberOfSections }) => 100 / numberOfSections}%;

        ${breakpoint.down("m")`
        width: 50%;
        `}

        ${breakpoint.down("s")`
        width: 100%;
        `}
  
        .stat-title {
          color: ${DARK_PURPLE};
          font-size: 3em;
          font-weight: 700;
          margin-bottom: 0.7rem;
        }
        .stat-subtitle {
          color: ${DARK_GRAY};
          font-size: 0.9em;
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .stat-caption {
          color: ${DARK_GRAY};
          font-size: 1.4em;
          font-weight: 400;
        }
      }
    }
  }
`;

const StatsSection = ({ title, items, ...otherProps }) => (
  <Container numberOfSections={items.length} {...otherProps}>
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="content">
      <div className="stats-box">
        {items &&
          items.map(({ id, name, stat, outOf }) => (
            <div className="stat" key={id}>
              <div className="stat-title">{stat}</div>
              <div className="stat-subtitle">out of {outOf}</div>
              <div className="stat-caption">{name}</div>
            </div>
          ))}
      </div>
    </div>
  </Container>
);

StatsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      stat: PropTypes.number,
      outOf: PropTypes.number,
    })
  ),
  isLast: PropTypes.bool,
};

export default StatsSection;
