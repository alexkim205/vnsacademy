import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BaseSection from "./base.style";
import {
  WHITE,
  BOX_SHADOW,
  BLACK,
  BRIGHT_PURPLE,
  LIGHT_GRAY,
  BUTTON_SHADOW
} from "../../constants/theme";

const Container = styled(BaseSection)`
	flex-direction: row;
	justify-content: space-evenly;

`;

const Button = styled.div`
	display: flex;
	background-color: ${BRIGHT_PURPLE};
	box-sizing: border-box;
	align-items: center;
	border-radius: 2px;
	box-shadow: ${BUTTON_SHADOW};
	color: ${WHITE};
	padding: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.message {
		font-weight: bold;
		margin-bottom: 30px;
	}
`;

function GetButtons(item) {
	const buttons = item.buttons.map((button, index) =>
		<ButtonContainer>
			<p className="message">{button.message}</p>
			<Button key={index}>
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