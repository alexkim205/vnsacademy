import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, MEDIUM_GRAY, DARK_GRAY , RED} from "../constants/theme";

const Subjects = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 70%;
  outline: 1px solid ${MEDIUM_GRAY};
  color: ${WHITE};
  box-shadow: -1px 1px ${MEDIUM_GRAY},
   -2px 2px ${MEDIUM_GRAY},
   -3px 3px ${MEDIUM_GRAY},
   -4px 4px ${MEDIUM_GRAY},
   -5px 5px ${MEDIUM_GRAY};
`;

const Bullet = styled.div`
	display: inline-block;
	background: ${RED};
	padding: 20px;
	width: 10px;
	height: 10px;
	margin: 10px;
	position: relative;
	top: 30px;
	bottom: 30px;
	right: 5px;
`;

const SubBox = styled.div`
	display: flex-start;
  align-items: center;
  color: ${DARK_GRAY};
  ul {
  	list-style-position: inside;
  	padding-bottom: 10px;
  }
  width: 100%;
  height: 100%;
  outline: 1px solid ${MEDIUM_GRAY};
  ul.content-list > li {
  	display: block;
  	height: 25px;
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
	const listItems = subjects.map((sub) =>
		<ul><Bullet/>{sub}</ul>
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
					<ListSubs subjects={subjects} />
				</SubBox>
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