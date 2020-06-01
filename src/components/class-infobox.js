import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { parseDateRange } from "../helpers/utils";
import {
  WHITE,
  BOX_SHADOW,
  BLACK,
  breakpoint,
  DARKER_BACKGROUND_WHITE,
  SUBJECTS_COLORS,
} from "../constants/theme";
import BaseSection from "./sections/base.style";

const Subjects = styled(BaseSection)`
  width: 100%;
  padding: 0;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Bullet = styled.div`
  display: inline-block;
  background-color: ${props => props.inputColor};
  padding: 1.2rem;
  margin-right: 1rem;
  position: relative;
`;

const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  height: 100%;
  box-sizing: border-box;
  box-shadow: ${BOX_SHADOW};
  width: calc(${({ width }) => width} - 0.75em);
  min-width: 250px;
  height: 100%;
  padding: 2em;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;

  ${breakpoint.down("m")`
  width: 100%;
  `}

  &.subjects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    .subject {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: 500;
      font-size: 1.05em;
      width: calc(50% - 1.6em);
      margin: 0.4em;

      ${breakpoint.down("s")`
      width: 100%;
      `}
    }
  }

  &.info-list {
    margin-left: 1.5em;
    z-index: 2;
    padding: 2.5em;

    ${breakpoint.down("m")`
    padding: 2em;
    text-align: center;
    margin-top: 1.5em;
    margin-left: 0;
    `}

    .info-item {
      margin-bottom: 1.2em;

      &:last-child {
        margin-bottom: 0;
      }

      h3.info-title {
        margin-bottom: 0;
        margin-top: 0;
      }

      p.info-content {
        font-weight: 500;
        line-height: 1.7em;
        font-size: 1em;
        margin: 0.5em 0 0.3em 0;
      }
    }
  }
`;

const Infobox = ({ data, widths = ["50%", "50%"] }) => {
  const { subjects, startDate, endDate, type, numSessions } = data;
  const dateRange =
    startDate && endDate ? parseDateRange(startDate, endDate) : null;

  return (
    <Subjects>
      <div className="content">
        <SubBox className="subjects" width={widths[0]}>
          {subjects &&
            subjects.map(({ name }, i) => (
              <div className="subject" key={i}>
                <Bullet inputColor={SUBJECTS_COLORS[i]} />
                {name}
              </div>
            ))}
        </SubBox>
        <div className="spacer"></div>
        <SubBox className="info-list" width={widths[1]}>
          {dateRange && (
            <div className="info-item">
              <h3 className="info-title">When</h3>
              <p className="info-content">{dateRange}</p>
            </div>
          )}
          {type && (
            <div className="info-item">
              <h3 className="info-title">Type</h3>
              <p className="info-content">{type}</p>
            </div>
          )}
          {numSessions && (
            <div className="info-item">
              <h3 className="info-title">No. of Sessions</h3>
              <p className="info-content">{numSessions}</p>
            </div>
          )}
        </SubBox>
      </div>
    </Subjects>
  );
};

Infobox.propTypes = {
  data: PropTypes.object.isRequired,
  widths: PropTypes.arrayOf(PropTypes.string),
};

export default Infobox;
