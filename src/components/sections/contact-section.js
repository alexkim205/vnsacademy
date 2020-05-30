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
  display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
  background-color: ${WHITE};
  outline: 1px solid ${LIGHT_GRAY};
  width: 100%;
  box-shadow: ${BOX_SHADOW};
  border-radius: 5px;
  margin: 0 auto;
`;

const SubContainer = styled.div`
  flex-direction: row;
`;

const DropDown = styled.div`

`;

const ContactSection = ({}) => {
  const contactReasons = [
    "Registering a student for a group class",
    "Registering a student for private tutoring",
    "I'm interested in becoming a tutor",
    "Other"
  ];
  return (
    <Container>
      <SubContainer>
        <p>You are contacting us about</p>
        <DropDown title="Select Reason" list={contactReasons} listOpen="false" />
      </SubContainer>
    </Container>
  );
};

export default ContactSection;