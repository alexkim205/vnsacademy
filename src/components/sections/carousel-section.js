import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import BaseSection from "./base.style";
import { WHITE } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const CarouselSection = ({ title, items, backgroundColor = WHITE }) => {
  const [active, setActive] = useState(0);

  console.log(active, items);

  return (
    <Container backgroundColor={backgroundColor}>
      <h2>{title}</h2>
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        totalSlides={items.length}
        isPlaying={true}
        infinite
      >
        <Slider>
          {items &&
            items.map(({ name, logo }, i) => {
              console.log(i, name, logo);
              return (
                <Slide index={i}>
                  <h3>{name}</h3>
                  <img src={logo}></img>
                </Slide>
              );
            })}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
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
