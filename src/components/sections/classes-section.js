import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IoIosArrowForward } from "react-icons/io";

import BaseSection from "./base.style";
import {
  BACKGROUND_WHITE,
  DARK_GRAY,
  BLACK,
  breakpoint,
} from "../../constants/theme";

import classesData from "../../data/classes.json";

const Container = styled(BaseSection)`
  background-color: ${BACKGROUND_WHITE};
  flex-direction: row;
  padding-top: 9em;

  ${breakpoint.down("m")`
  padding-top: 5em;
  `}

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;

    ${breakpoint.down("m")`
    flex-direction: column;
    `}

    .section {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      margin-bottom: 5.2em;

      ${breakpoint.down("m")`
        margin-bottom: 4em;
      `}

      .section-title {
        line-height: 1.4em;
        font-size: 2em;
        margin-bottom: 1em;
        color: ${BLACK};
      }
      .section-bullet {
        a {
          display: flex;
          align-items: center;
          color: ${DARK_GRAY};
          text-decoration: none;
          transition: 0.15s all;

          &:focused,
          &:visited {
            color: ${DARK_GRAY};
          }
          &:hover {
            color: ${BLACK};
          }

          svg {
            margin-left: 0.3rem;
          }
        }
        margin-left: 1em;
        margin-bottom: 1.2em;

        ${breakpoint.down("m")`
          margin-left: 0;
        `}
      }
    }

    .left,
    .right {
      width: 50%;

      ${breakpoint.down("m")`
        width: 100%;
      `}
    }

    .right {
      .section {
        padding-left: 1.5em;
        ${breakpoint.down("m")`
          padding-left: 0;
        `}
      }
    }
    .left {
      .section {
        padding-right: 1.5em;
        ${breakpoint.down("m")`
          padding-right: 0;
        `}
      }
    }
  }
`;

const ClassesSection = ({ children, ...otherProps }) => {
  const parseByCategory = () => {
    let categories = {};
    classesData.forEach(({ category, key, name, path }, i) => {
      const thisCategory = categories[category];
      const thisClass = { key, name, path };
      categories[category] = thisCategory
        ? [...thisCategory, thisClass]
        : [thisClass];
    });
    return categories;
  };

  const classesByCategory = parseByCategory();
  // For now no need to render manually. At most, there'll probably only be these 4 sections.
  const categories = [
    "School Prep",
    "Math + Science Competitions",
    "Standardized Testing Prep",
    "Private Tutoring",
  ];

  const renderSection = categoryKey => (
    <div className="section">
      <div className="section-title">{categoryKey}</div>
      {classesByCategory[categoryKey].map(({ key, name }, i) => (
        <div className="section-bullet" key={key}>
          <Link to={`/classes/${key}`}>
            {name}
            <IoIosArrowForward size={"1rem"} />
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <Container {...otherProps}>
      <div className="content">
        <div className="left">
          {renderSection(categories[0])}
          {renderSection(categories[1])}
        </div>
        <div className="right">
          {renderSection(categories[2])}
          {renderSection(categories[3])}
        </div>
      </div>
    </Container>
  );
};

export default ClassesSection;
