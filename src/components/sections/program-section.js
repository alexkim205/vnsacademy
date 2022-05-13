import React from "react";
import { Link } from "gatsby";

import HighlightSection from "./highlight-section";

const ProgramSection = () => {
  return (
    <HighlightSection light>
      <span className="highlight">
        Register now for our{" "}
        <Link to={"/programs/summer-program-2022"}>2022 Summer Program</Link>{" "}
        (starts July 05, 2022).
      </span>
    </HighlightSection>
  );
};

export default ProgramSection;
