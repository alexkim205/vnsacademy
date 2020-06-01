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

const Subjects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // max-width: 800px;
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;
  margin: 0 auto;

  ${breakpoint.down("m")`
  flex-direction: column;
  `}

  font-family: "Poppins", sans-serif;

  .spacer {
    width: 2px;
    height: auto;
    background-color: ${DARKER_BACKGROUND_WHITE};

    ${breakpoint.down("m")`
    width: 100%;
    height: 2px;
    `}
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
  color: ${BLACK};
  height: 100%;
  box-sizing: border-box;
  padding: 2em 2.5em;

  &.subjects {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto 0;

    ${breakpoint.down("m")`
      width: 100%;
    `}

    .subject {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1em;
      margin-top: 1em;
      box-sizing: border-box;
      width: calc((100% - 1.5rem) / 2);
      font-weight: 500;

      &:nth-child(even) {
        margin-left: 1.5rem;
      }

      ${breakpoint.down("m")`
        width: 50%;
        &:nth-child(even) {
          margin-left: 0;
        }
      `}

      ${breakpoint.down("xs")`
        width: 100%;
      `}
    }
  }

  &.info-list {
    display: flex;
    width: 50%;
    flex-direction: row;
    margin: auto 0;

    ${breakpoint.down("m")`
      width: 100%;
    `}

    .titles {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .infos {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-weight: 600;
      text-align: right;
    }
    .info-item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.5em;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

const Infobox = ({ data }) => {
  const { subjects, startDate, endDate, type, numSessions } = data;
  const dateRange =
    startDate && endDate ? parseDateRange(startDate, endDate) : null;

  return (
    <Subjects>
      <SubBox className="subjects">
        {subjects &&
          subjects.map(({ name }, i) => (
            <div className="subject" key={i}>
              <Bullet inputColor={SUBJECTS_COLORS[i]} />
              {name}
            </div>
          ))}
      </SubBox>
      <div className="spacer"></div>
      <SubBox className="info-list">
        <div className="titles">
          {dateRange && <div className="info-item">When</div>}
          <div className="info-item">Type</div>
          {numSessions && <div className="info-item">No. of Sessions</div>}
        </div>
        <div className="infos">
          {dateRange && <div className="info-item">{dateRange}</div>}
          <div className="info-item">{type}</div>
          {numSessions && <div className="info-item">{numSessions}</div>}
        </div>
      </SubBox>
    </Subjects>
  );
};

Infobox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Infobox;
