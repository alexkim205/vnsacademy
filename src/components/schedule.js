import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BaseSection from "../components/sections/base.style";

import { WHITE, LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY, RED, DARK_YELLOW, LIGHT_PURPLE} from "../constants/theme";

const ScheduleContainer = styled(BaseSection)` 
  display: flex;
  flex-direction: row;
  background-color: ${WHITE};
  justify-content: center;
  align-items: flex-start;
  font-weight: 600;
  position: relative;
  margin-top: 5rem;
  .DOW {
  	width: 15%;
  	text-align: center;
  }
`;

const ScheduleBlock = styled.div`
	background: ${props => props.color};
	width: 10%;
	height: ${props => props.size};
	border-radius: 5px;
`;

function AddScheduleBlock(item) {
	const colors = ["#FF0054", "#FFBD00", "#EBE1FF"];
	const subject = item.subject;
	const startTime = item.startTime;
	const endTime = item.endTime;
	const duration = parseInt(item.duration) * 0.5;
	const color = item.colorInd;
	return (
		<Fragment>
			<ScheduleBlock color={colors[color]} height={duration}>
				<p>{subject} <br /> {startTime} - {endTime}</p>
			</ScheduleBlock>
		</Fragment>
	);
}

function ScheduleByDay(item) {
	//all schedules for that day of the week
	const scheduleItems = item.schedule.map((sched, index) =>
		<AddScheduleBlock key={index} subject={sched[0]} startTime={sched[1]} endTime={sched[2]} duration={sched[3]} colorInd={sched[4]} />
	);
	return (
		<Fragment>{scheduleItems}</Fragment>
	);
}

const Schedule = ({weekSchedule}) => {
	return (
		<Fragment>
			<ScheduleContainer>
				<div class="DOW Monday">
					<h1>M</h1>
					<ScheduleByDay schedule={weekSchedule[0]} />
				</div>
				<div class="DOW Tuesday">
					<h1>T</h1>
					<ScheduleByDay schedule={weekSchedule[1]} />
				</div>
				<div class="DOW Wednesday">
					<h1>W</h1>
					<ScheduleByDay schedule={weekSchedule[2]} />
				</div>
				<div class="DOW Thursday">
					<h1>Th</h1>
					<ScheduleByDay schedule={weekSchedule[3]} />
				</div>
				<div class="DOW Friday">
					<h1>F</h1>
					<ScheduleByDay schedule={weekSchedule[4]} />
				</div>
			</ScheduleContainer>
		</Fragment>
	);
};

Schedule.propTypes = {
	/*
		Indexing Key for weekSchedule
		0: Monday
		1: Tuesday
		...
		4:Friday

		Indexing Key for weekSchedule[x]
		0: subject
		1: startTime
		2: endTime
		3: duration in hours * 10 (ie. 1.5 hr -> 15, 2 hr -> 20)
		4: color 
			0: red
			1: yellow
			2: purple
	*/
	weekSchedule: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Schedule;