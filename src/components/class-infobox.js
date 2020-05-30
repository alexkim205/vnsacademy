import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  WHITE,
  BOX_SHADOW,
  BLACK,
  breakpoint,
  LIGHT_GRAY,
} from "../constants/theme";

const Subjects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;
  margin: 0 auto;

  ${breakpoint.down("m")`
  flex-direction: column;
  `}

  font-family: "Poppins", sans-serif;

  .spacer {
    width: 1px;
    height: auto;
    background-color: ${LIGHT_GRAY};

    ${breakpoint.down("m")`
    width: 100%;
    height: 1px;
    `}
  }
`;

const Bullet = styled.div`
  display: inline-block;
  background: ${props => props.inputColor};
  padding: 1.5rem;
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
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: auto 0;

    ${breakpoint.down("m")`
      width: 100%;
    `}

    .subject {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  &.info-list {
    display: flex;
    width: 60%;
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

const Infobox = ({ classInfo }) => {
  const { subjects, when, type, numSessions } = classInfo;
  const colors = ["#FF0054", "#FFBD00", "#EBE1FF"];

  return (
    <Subjects>
      <SubBox className="subjects">
        {subjects &&
          subjects.map((name, i) => (
            <div key={i} className="subject">
              <Bullet inputColor={colors[i]} />
              {name}
            </div>
          ))}
      </SubBox>
      <div className="spacer"></div>
      <SubBox className="info-list">
        <div className="titles">
          <div className="info-item">When</div>
          <div className="info-item">Type</div>
          <div className="info-item">No. of Sessions</div>
        </div>
        <div className="infos">
          <div className="info-item">{when}</div>
          <div className="info-item">{type}</div>
          <div className="info-item">{numSessions}</div>
        </div>
      </SubBox>
    </Subjects>
  );
};

Infobox.propTypes = {
  classInfo: PropTypes.object.isRequired,
};

export default Infobox;
