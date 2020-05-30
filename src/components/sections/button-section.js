import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import BaseSection from "./base.style";
import {
  WHITE,
  BOX_SHADOW,
  BLACK,
  BRIGHT_PURPLE,
  LIGHT_GRAY,
  BUTTON_SHADOW,
  breakpoint
} from "../../constants/theme";

const Container = styled(BaseSection)`
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Button = styled(Link)`
	display: flex;
	background-color: ${BRIGHT_PURPLE};
	box-sizing: border-box;
	align-items: center;
	border-radius: 4px;
	box-shadow: ${BUTTON_SHADOW};
	color: ${WHITE};
	padding: 1rem 2rem;
	font-weight: normal;
	text-decoration: none;

	&:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: none;
    text-decoration: underline;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.message {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	${breakpoint.down("m")`
		flex: 1 0 50%;
		margin-bottom: 2rem;
		.message {
			margin-bottom: 1rem;
		}
	`}
	${breakpoint.down("xs")`
		flex: 1 0 100%;
	`}
`;

function GetButtons(item) {
	const buttons = item.buttons.map((button, index) =>
		<ButtonContainer>
			<p className="message">{button.message}</p>
			<Button key={index} to={button.link} active="active">
				{button.buttonTitle}
			</Button>
		</ButtonContainer>
	);
	return (
		<Fragment>
			{buttons}
		</Fragment>
	)
}

const ButtonSection = ({buttons}) => {
	return (
		<Container>
			<GetButtons buttons={buttons}/>
		</Container>
	);
};

ButtonSection.propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object)
}

export default ButtonSection;