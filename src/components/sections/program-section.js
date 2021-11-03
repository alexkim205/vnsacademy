import React from "react";
import { Link } from "gatsby";

import HighlightSection from "./highlight-section";

const ProgramSection = () => {
  return (
    <HighlightSection light>
      <span className="highlight">
        Register now for our{" "}
        <Link to={"/programs/fall-program-2021"}>2021 Fall Program</Link>{" "}
        (starts September 11, 2021).
      </span>
    </HighlightSection>
  );
};

export default ProgramSection;
