import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import ContainedSection from "../components/sections/contained-section";

const ClassesPage = () => {
  const classInfo = {
    subjects: ["SAT English + Writing", "SAT Math"],
    when: "July 1 - August 31, 2020",
    type: "Group (Zoom)",
    numSessions: 32,
  };

  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      <ContainedSection>
        <Infobox classInfo={classInfo} />
      </ContainedSection>
    </Layout>
  );
};

export default ClassesPage;
