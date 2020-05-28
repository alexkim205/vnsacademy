import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY, RED, DARK_YELLOW, LIGHT_PURPLE} from "../constants/theme";

const Subjects = styled.div`
  display: flex;
  justify: center;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 200px;
  color: ${WHITE};
  box-shadow: 0px 10px 20px 1px ${LIGHT_GRAY}; 
  border-radius: 5px;
	font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;
`;

const Bullet = styled.div`
	display: inline-block;
	background: ${props => props.inputColor};
	padding: 20px;
	margin-right: 10px;
	position: relative;
`;

const SubBox = styled.div`
	display: flex;
	flex-basis: 50%;
  justify-content: flex-start;
  align-items: center;
	vertical-align: middle;
  color: ${DARK_GRAY};
  width: 50%;
  height: 100%;
	margin: 10px 0px;
	padding: 0px 20px;
  top: 0%;
	border-right: 1px solid ${MEDIUM_GRAY};
	&:last-child {
		border:none;
	}
  .subjects {
  	flex: 1 0 30%;
	  padding: 20px 0px;
  	.subject {
  		display: flex;
  		justify-content: flex-start;
  		align-items: center;
  		margin-bottom: 15px;
  		&:last-child {
  			margin-bottom: 0px;
  		}
  	}
	}
  ul {
  	list-style-position: inside;
  	flex: 1 0 70%;
  }
  ul.content-list {
  	display: flex;
  	width: 100%;
	  box-sizing: border-box;
  	justify-content: space-evenly;
  	flex-direction: column;
  	padding-left: 0px;
  }
  ul.content-list > li {
  	display: flex;
  	justify-content: space-between;
		margin-bottom: 10px;
		&:last-child {
			margin-bottom: 0px;
		}
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
		<div class="subject"><Bullet inputColor={colors[index]}/>{sub}</div>
	);
	return (
		<React.Fragment>{listItems}</React.Fragment>
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