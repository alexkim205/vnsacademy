import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import styled from "styled-components";
import moment from "moment";

import BaseSection from "../components/sections/base.style";
import { parseTimeRange } from "../helpers/utils";
import {
  WHITE,
  BUTTON_SHADOW,
  BOX_SHADOW,
  SUBJECTS_COLORS,
  breakpoint,
} from "../constants/theme";

const ScheduleContainer = styled(BaseSection)`
  display: flex;
  flex-direction: row;
  background-color: ${WHITE};
  justify-content: center;
  align-items: flex-start;
  font-weight: 600;
  position: relative;
  // margin-top: 5rem;
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;
  padding: 3.5em 2.5em;
  margin-top: -3em;
  margin-bottom: -3em;

  ${breakpoint.down("s")`
  flex-direction: column;
  `}

  .DOW {
    width: calc((100% - 2em) / 5);
    text-align: center;
    padding: 1em;
    display: flex;
    flex-direction: column;
    // height: 100%;
    // height: calc(${({ maxBlocks }) => maxBlocks * 1.5}px + 15em);
    // box-sizing: border-box;

    ${breakpoint.down("m")`
      padding: 0.5em;
    `}

    ${breakpoint.down("s")`
      width: 100%;
      padding: 0;
      margin-bottom: 2em;
    `}

    h1 {
      margin-bottom: 1.33em;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

const DayBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;

const ScheduleBlock = styled.div`
  height: ${props => props.size}px;
  box-sizing: border-box;
  // box-shadow: ${BUTTON_SHADOW};
  padding: 0.5em 0;
  visibility: ${({ isFiller }) => (isFiller ? "hidden" : "visible")};

  .subject-content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    height: 100%;
    padding: 1em;
    align-items: center;
    transition: 0.1s all;
    background-color: ${props => props.colorInput};
    border-radius: 5px;

    &:hover {
      transform: translate(0, 2px);
      // box-shadow: none;
    }

    .subject-name {
      font-weight: 600;
      font-size: 1.1em;
      margin-bottom: 0.3em;
    }
    .subject-time {
      font-size: 1.1em;
      font-weight: 500;
    }
  }
`;

const Schedule = ({ scheduleData, colorMap }) => {
  // Return null for empty schedule
  if (_.every(_.map(_.values(scheduleData), day => day.length === 0)))
    return <Fragment />;

  const { M, T, W, Th, F } = scheduleData;
  const maxDurationInOneDay = _.max(
    _.map(_.values(scheduleData), day =>
      _.sum(_.map(day, ({ duration }) => duration))
    )
  );

  const renderScheduleByDay = schedule => {
    const totalDurationInDay = _.sum(
      _.map(schedule, ({ duration }) => duration)
    );

    return (
      <DayBlock>
        {schedule.map(({ name, key, startTime, endTime, duration }, i) => (
          <ScheduleBlock
            key={i}
            colorInput={SUBJECTS_COLORS[colorMap.findIndex(k => k === key)]}
            size={duration * 1.5}
            isFiller={name === "filler"}
          >
            <div className="subject-content">
              <div className="subject-name">{name}</div>
              <div className="subject-time">
                {parseTimeRange(startTime, endTime)}
              </div>
            </div>
          </ScheduleBlock>
        ))}
      </DayBlock>
    );
  };

  return (
    <Fragment>
      <ScheduleContainer maxBlocks={maxDurationInOneDay}>
        <div className="DOW Monday">
          <div className="weekday-title">
            <h1>M</h1>
          </div>
          {renderScheduleByDay(M)}
        </div>
        <div className="DOW Tuesday">
          <div className="weekday-title">
            <h1>T</h1>
          </div>
          {renderScheduleByDay(T)}
        </div>
        <div className="DOW Wednesday">
          <div className="weekday-title">
            <h1>W</h1>
          </div>
          {renderScheduleByDay(W)}
        </div>
        <div className="DOW Thursday">
          <div className="weekday-title">
            <h1>Th</h1>
          </div>
          {renderScheduleByDay(Th)}
        </div>
        <div className="DOW Friday">
          <div className="weekday-title">
            <h1>F</h1>
          </div>
          {renderScheduleByDay(F)}
        </div>
      </ScheduleContainer>
    </Fragment>
  );
};

Schedule.propTypes = {
  /*
		Indexing Key for scheduleData
		M: Monday
		T: Tuesday
		...
		F: Friday

		Indexing Key for scheduleData.{weekday}
		0: name
		1: startTime
		2: endTime
		3: duration (in hours * 10 ie. 1.5 hr -> 15, 2 hr -> 20)
		4: key
	*/
  scheduleData: PropTypes.shape({
    M: PropTypes.arrayOf(PropTypes.object),
    T: PropTypes.arrayOf(PropTypes.object),
    W: PropTypes.arrayOf(PropTypes.object),
    Th: PropTypes.arrayOf(PropTypes.object),
    F: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  colorMap: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Schedule;
