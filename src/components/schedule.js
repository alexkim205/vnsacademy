import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import styled from "styled-components";

import BaseSection from "../components/sections/base.style";
import { parseTimeRange } from "../helpers/utils";
import {
  WHITE,
  BUTTON_SHADOW,
  BOX_SHADOW,
  SUBJECTS_COLORS,
} from "../constants/theme";

const ScheduleContainer = styled(BaseSection)`
  display: flex;
  flex-direction: row;
  background-color: ${WHITE};
  justify-content: center;
  align-items: flex-start;
  font-weight: 600;
  position: relative;
  margin-top: 5rem;
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;

  .DOW {
    width: 15%;
    text-align: center;
    padding: 10px;
    height: ${({ maxBlocks }) => 10 * maxBlocks}em;

    h1 {
      margin-bottom: 1.3em;
    }
  }
`;

const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.colorInput};
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.size}rem;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: ${BUTTON_SHADOW};
  &:last-child {
    margin-bottom: 0px;
  }

  .subject-name {
    font-weight: 400;
  }
  .subject-time {
    font-size: 1.1em;
    font-weight: 500;
  }
`;

const ScheduleByDay = ({ schedule }) => (
  <Fragment>
    {schedule.map(({ name, startTime, endTime, duration }, i) => (
      <ScheduleBlock colorInput={SUBJECTS_COLORS[i]} size={duration / 18}>
        <div className="subject-name">{name}</div>
        <div className="subject-time">{parseTimeRange(startTime, endTime)}</div>
      </ScheduleBlock>
    ))}
  </Fragment>
);

const Schedule = ({ scheduleData }) => {
  const { M, T, W, Th, F } = scheduleData;
  const maxInOneDay = Math.max(_.values(scheduleData, day => day.length));
  return (
    <Fragment>
      <ScheduleContainer maxBlocks={maxInOneDay}>
        <div className="DOW Monday">
          <h1>M</h1>
          <ScheduleByDay schedule={M} />
        </div>
        <div className="DOW Tuesday">
          <h1>T</h1>
          <ScheduleByDay schedule={T} />
        </div>
        <div className="DOW Wednesday">
          <h1>W</h1>
          <ScheduleByDay schedule={W} />
        </div>
        <div className="DOW Thursday">
          <h1>Th</h1>
          <ScheduleByDay schedule={Th} />
        </div>
        <div className="DOW Friday">
          <h1>F</h1>
          <ScheduleByDay schedule={F} />
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
};

export default Schedule;
