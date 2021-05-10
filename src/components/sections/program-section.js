import React from "react";
import { Link } from "gatsby";

import HighlightSection from "./highlight-section";

const ProgramSection = () => {
  return (
    <HighlightSection light>
      <span className="highlight">
        Register now for our{" "}
        <Link to={"/programs/summer-program-2021"}>2021 Summer Program</Link>{" "}
        (starts July 2, 2021). <br />
        Registration details will be released at the beginning of August.
      </span>
    </HighlightSection>
  );
};

export default ProgramSection;
