import React from "react";
import styled from "styled-components";

import BaseSection from "./sections/base.style";
import {
  WHITE,
  BOX_SHADOW,
  DARK_BACKGROUND_WHITE,
  RED,
  breakpoint,
} from "../constants/theme";

export const StyledToast = styled.div`
  padding: 1em 2em;
  text-align: center;

  .name {
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 0.3em;
  }
  .message {
  }
`;

export const Container = styled(BaseSection)`
  .content {
    width: 100%;
    box-sizing: border-box;
    background-color: ${WHITE};
    align-items: center;
    border-radius: 5px;
    box-shadow: ${BOX_SHADOW};
    padding: 3.5em 3.5em;

    form {
      display: flex;
      flex-direction: column;
      font-family: "Poppins", sans-serif;
      font-size: 1em;

      .input-wrapper {
        display: block;
        margin-bottom: 1em;

        ${breakpoint.down("s")`
          text-align: center;
        `}

        &:last-child {
          margin-bottom: 0;
        }

        .input-text {
          display: inline-block;
          font-weight: 500;

          ${breakpoint.down("s_m")`
            width: 100%;
            margin-bottom: 0.5em;

            &.append {
              display: none;
            }
          `}

          &.append.select {
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
            box-sizing: border-box;

            ${breakpoint.down("s_m")`
              margin-left: 0;
            `}

            ${breakpoint.down("s")`
              text-align: center;
            `}

            &[name="phone"] {
              width: 122px;
              ${breakpoint.down("s")`
                width: 100%;
              `}
            }
            &[name="email"] {
              width: 180px;
              ${breakpoint.down("s")`
                width: 100%;
              `}
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
          color: ${RED};

          ${breakpoint.down("s_m")`
          text-align: left;
          `}
          ${breakpoint.down("s")`
          text-align: center;
          `}
        }
      }

      .buttons-section {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        ${breakpoint.down("s_m")`
        justify-content: center;
        `}
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
    box-sizing: border-box;

    ${breakpoint.down("s_m")`
      margin-left: 0;
    `}

    ${breakpoint.down("s")`
      text-align: center;
      text-align-last:center;
    `}

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
