import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import _ from "lodash";
import anime from "animejs";
import styled from "styled-components";

import BaseSection from "./base.style";
import { WHITE } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  .content {
    .carousel-title {
    }
    .carousel-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 150px;

      .item {
        height: 90px;
        width: 90px;
      }
    }
  }
`;

const CarouselItem = props => (
  <Img
    className="item"
    imgStyle={{
      objectFit: "none",
    }}
    {...props}
  ></Img>
);

const CarouselSection = ({ title, items, backgroundColor = WHITE }) => {
  const [active, setActive] = useState(0);
  const [window, setWindow] = useState({
    prev: items[active - 1 + (active === 0 ? items.length : 0)],
    curr: items[active],
    next: items[(active + 1) % items.length],
    nextnext: items[(active + 2) % items.length],
  });

  console.log(active, items);

  // Auto scrolling infinitely would require previous, current, next,
  // and the element after that to be rendered.

  useEffect(() => {
    const nextActive = (active + 1) % items.length;
    const interval = setInterval(() => {
      console.log("going to next");
      setActive(nextActive);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const setNewActiveWindow = () => {
    setWindow(prevState => ({
      prev: prevState.curr,
      curr: prevState.next,
      next: prevState.nextnext,
      nextnext: items[(active + 2) % items.length],
    }));
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <h2>{title}</h2>
      <div className="content">
        <div className="carousel-title">{window.curr.name}</div>
        <div className="carousel-content">
          <CarouselItem fluid={window.prev.fixed} alt="previous"></CarouselItem>
          <CarouselItem fluid={window.curr.fixed} alt="current"></CarouselItem>
          <CarouselItem fluid={window.next.fixed} alt="next"></CarouselItem>
          <CarouselItem
            fluid={window.nextnext.fixed}
            alt="nextnext"
          ></CarouselItem>
        </div>
      </div>
    </Container>
  );
};

CarouselSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
};

export default CarouselSection;
