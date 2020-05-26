import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY, RED, DARK_YELLOW, LIGHT_PURPLE} from "../constants/theme";

const Subjects = styled.div`
  display: flex;
  justify: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  width: 40%;
  height: 70%;
  color: ${WHITE};
  box-shadow: 0px 10px 20px 1px ${LIGHT_GRAY}; 
`;

const Bullet = styled.div`
	display: inline-block;
	background: ${props => props.inputColor};
	padding: 20px;
	width: 1%;
	height: 1%;
	margin: 0px 20px 10px 0px;
	position: relative;
	top: 25px;
`;

const SubBox = styled.div`
	display: flex-start;
  align-items: center;
  color: ${DARK_GRAY};
  width: 100%;
  height: 100%;
  .subjects {
  	display: block;
  	align-items: center;
  	border-right: 1px solid ${MEDIUM_GRAY};
  	width: 90%;
  	margin-left:-20px;
	}
  ul {
  	list-style-position: inside;
  	padding-bottom: 10px;
  	vertical-align: middle;
  }
  ul.content-list {
  	display: flex;
  	justify-content: space-evenly;
  	flex-direction: column;
  	margin-left: -70px;
  	margin-top: 40px;
  }
  ul.content-list > li {
  	display: block;
  	height: 50%;
  	top: auto;
  	bottom: auto;
  	margin: 10px 0;
  	margin-right: 10%;
  	margin-left: 10%;
  }
  ul.content-list > li > div.title {
  	float: left;
  }
  ul.content-list > li > div.content {
  	float: right;
  }
`;

function ListSubs(items) {
	const subjects = items.subjects;
	const colors = ["#FF0054", "#FFBD00", "#EBE1FF"];
	const listItems = subjects.map((sub, index) =>
		<ul><Bullet inputColor={colors[index]}/>{sub}</ul>
	);
	return (
		<ul>{listItems}</ul>
	);
}

function ListInfo(items) {
	const when = items.when;
	const type = items.type;
	const num = items.numSessions;
	const price = items.price;
	return (
		<React.Fragment>
			<ul class="content-list">
				<li>
					<div class="title">When</div>
					<div class="content"><b>{when}</b></div>
				</li>
				<li>
					<div class="title">Type</div>
					<div class="content"><b>{type}</b></div>
				</li>
				<li>
					<div class="title">No. of Sessions</div>
					<div class="content"><b>{num}</b></div>
				</li>
				<li>
					<div class="title">Price</div>
					<div class="content"><b>{price}</b></div>
				</li>
			</ul>
		</React.Fragment>
	);
}

const Infobox = ({ subjects, when, type, numSessions, price }) => {
	return (
		<Subjects>
			<SubBox>
				<div class="subjects">
					<ListSubs subjects={subjects} />
				</div>
			</SubBox><br />
			<SubBox>
				<ListInfo when={when} type={type} numSessions={numSessions} price={price} />
			</SubBox>
		</Subjects>
	);
};

Infobox.propTypes = {
	subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
	when: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	numSessions: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired
};

export default Infobox;