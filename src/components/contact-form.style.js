import React from "react";
import styled from "styled-components";

import BaseSection from "./sections/base.style";
import {
  WHITE,
  BUTTON_SHADOW,
  BOX_SHADOW,
  SUBJECTS_COLORS,
  DARK_BACKGROUND_WHITE,
  breakpoint,
  MEDIUM_GRAY,
  BACKGROUND_WHITE,
} from "../constants/theme";

export const StyledToast = styled.div`
  .name {

  }
  .message {
    
  }
`

export const Container = styled(BaseSection)`
  .content {
    width: 100%;
    box-sizing: border-box;
    background-color: ${WHITE};
    align-items: center;
    border-radius: 5px;
    box-shadow: ${BOX_SHADOW};
    padding: 3.5em 2.5em;

    form {
      display: flex;
      flex-direction: column;
      font-family: "Poppins", sans-serif;
      font-size: 1em;

      .input-wrapper {
        display: block;
        margin-bottom: 1em;

        &:last-child {
          margin-bottom: 0;
        }

        .input-text {
          display: inline-block;
          font-weight: 500;

          &.append {
            margin-left: 1em;
          }
        }
        .input-input {
          display: inline-block;

          &.break {
            display: block;
          }

          input {
            background-color: ${DARK_BACKGROUND_WHITE};
            border: 1px solid ${DARK_BACKGROUND_WHITE};
            border-radius: 4px;
            // width: 100%;
            padding: 0.7em 0.5em;
            margin: 0 0.5em;
            font-size: 1.05em;
            color: #3f3f3f;

            &[name="phone"] {
              width: 110px;
              // text-align: center;
            }
            &[name="email"] {
              width: 180px;
            }
          }

          textarea {
            font-family: "Poppins", sans-serif;
            font-size: 1.05em;
            background: ${DARK_BACKGROUND_WHITE};
            border: 1px solid ${DARK_BACKGROUND_WHITE};
            border-radius: 4px;
            padding: 0.7em 0.5em;
            margin: 0.5em 0;
            width: 100%;
            box-sizing: border-box;
            resize: none;
          }
        }

        .input-error {
          width: 100%;
          font-size: 0.9em;
          text-align: right;
          color: red;
        }
      }

      .buttons-section {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }
  }
`;

const SelectContainer = styled.div`
  position: relative;

  &:after {
    content: ">";
    transform: rotate(90deg);
    font-size: 1.3em;
    position: absolute;
    top: 0.5em;
    right: 0.3em;
    color: #3f3f3f;
    pointer-events: none;
  }

  select {
    background-color: ${DARK_BACKGROUND_WHITE};
    border: 1px solid ${DARK_BACKGROUND_WHITE};
    border-radius: 4px;
    width: 100%;
    padding: 0.7em 1.2em 0.7em 0.5em;
    margin: 0 0.5em;
    font-size: 1.05em;
    color: #3f3f3f;

    /* Here's the code we need */
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    &::-ms-expand {
      display: none;
    }
  }
`;

export const Select = React.forwardRef(({ children, ...selectProps }, ref) => (
  <SelectContainer>
    <select {...selectProps} ref={ref}>
      {children}
    </select>
  </SelectContainer>
));
