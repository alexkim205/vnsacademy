import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, DARK_PURPLE } from "../constants/theme";

const Subjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 500px;
  background-color: ${DARK_PURPLE};
  color: ${WHITE};
`;

const SubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: ${DARK_PURPLE};
  color: ${WHITE};
`;

const Infobox = ({ subjects, when, type, numSessions, price }) => {
	return (
		<Subjects>
			for (const [index, value] of subjects.entries()) {
				<SubBox active="active">
					value
				</SubBox>
			}
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