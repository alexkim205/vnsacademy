import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BaseSection from "./base.style";
import Button from "../button";
import { breakpoint } from "../../constants/theme";

const Container = styled(BaseSection)`
  padding-top: 4em;
  padding-bottom: 4em;

  ${breakpoint.down("m")`
  padding-top: 2em;
  padding-bottom: 0.5em;
  `}

  .content {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  width: 50%;

  .message {
    margin-bottom: 1rem;
  }
  ${breakpoint.down("m")`
		flex: 1 0 50%;
		margin-bottom: 2rem;
		.message {
			margin-bottom: 1rem;
		}
	`}
  ${breakpoint.down("s")`
		flex: 1 0 100%;
	`}
`;

const ButtonSection = ({ buttons }) => {
  return (
    <Container>
      <div className="content">
        {buttons.map(({ message, link, buttonTitle }, index) => (
          <ButtonContainer>
            <p className="message">{message}</p>
            <Button key={index} to={link} active="active">
              {buttonTitle}
            </Button>
          </ButtonContainer>
        ))}
      </div>
    </Container>
  );
};

ButtonSection.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      buttonTitle: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default ButtonSection;
