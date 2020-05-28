import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BaseSection from "../components/sections/base.style";

import { WHITE, LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY, RED, DARK_YELLOW, LIGHT_PURPLE} from "../constants/theme";

const Subjects = styled(BaseSection)` 
  display: flex;
  flex-direction: row;
  justify: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  background-color: ${WHITE};
  box-shadow: 0px 10px 20px 1px ${LIGHT_GRAY}; 
  border-radius: 5px;
	font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;
  padding: 0rem 0rem;
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
  justify-content: flex-start;
  align-items: stretch;
	vertical-align: middle;
  color: ${DARK_GRAY};
  width: 50%;
  height: 100%;
	padding: 2rem 3rem;
  top: 0%;
  box-sizing: border-box;	
	border-right: 1px solid ${MEDIUM_GRAY};
	&:last-child {
		border: none;
  	flex: 2 1 80%;
	}
  .subjects {
  	display: flex;
  	flex-direction: column;
  	align-items: stretch;
	  padding: 1rem 0rem;
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
  ul {
  	list-style-position: inside;
  }
  ul.content-list {
  	display: flex;
  	width: 100%;
  	justify-content: space-evenly;
  	flex-direction: column;
  	padding-left: 0rem;
  }
  ul.content-list > li {
  	display: inline-block;
  	text-align: left;
  	justify-content: space-between;
		margin-bottom: 0.4rem;
		&:last-child {
			margin-bottom: 0rem;
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