import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BaseSection from "../components/sections/base.style";

import { 
	WHITE, 
	LIGHT_GRAY, 
	MEDIUM_GRAY, 
	DARK_GRAY, 
	RED, 
	DARK_YELLOW, 
	LIGHT_PURPLE,
	BUTTON_SHADOW
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
  .DOW {
  	width: 15%;
  	text-align: center;
  	padding: 10px;
  }
`;

const ScheduleBlock = styled.div`
	display: flex;
	background-color: ${props => props.colorInput || "#FF0054"};
	box-sizing: border-box;
	width: 100%;
	height: ${props => props.size}rem;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	font-weight: normal;
	box-shadow: ${BUTTON_SHADOW};
	&:last-child {
		margin-bottom: 0px;
	}
`;

function AddScheduleBlock(item) {
	const colors = ["#FF0054", "#FFBD00", "#EBE1FF"];
	const subject = item.subject;
	const startTime = item.startTime;
	const endTime = item.endTime;
	const duration = item.duration * 3.5;
	const colorInd = item.colorInd;
	return (
		<Fragment>
			<ScheduleBlock colorInput={colors[colorInd]} size={duration}>
				<p>{subject} <br /> {startTime} - {endTime}</p>
			</ScheduleBlock>
		</Fragment>
	);
}

function ScheduleByDay(item) {
	//all schedules for that day of the week
	const scheduleItems = item.schedule.map((sched, index) =>
		<AddScheduleBlock key={index} subject={sched.subject} 
		startTime={sched.startTime} endTime={sched.endTime} 
		duration={sched.duration} colorInd={sched.colorInd} />
	);
	return (
		<Fragment>{scheduleItems}</Fragment>
	);
}

const Schedule = ({weekSchedule}) => {
	return (
		<Fragment>
			<ScheduleContainer>
				<div className="DOW Monday">
					<h1>M</h1>
					<ScheduleByDay schedule={weekSchedule[0]} />
				</div>
				<div className="DOW Tuesday">
					<h1>T</h1>
					<ScheduleByDay schedule={weekSchedule[1]} />
				</div>
				<div className="DOW Wednesday">
					<h1>W</h1>
					<ScheduleByDay schedule={weekSchedule[2]} />
				</div>
				<div className="DOW Thursday">
					<h1>Th</h1>
					<ScheduleByDay schedule={weekSchedule[3]} />
				</div>
				<div className="DOW Friday">
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
		3: duration (in hours * 10 ie. 1.5 hr -> 15, 2 hr -> 20)
		4: colorInd
			0: red
			1: yellow
			2: purple
	*/
	weekSchedule: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired
};

export default Schedule;