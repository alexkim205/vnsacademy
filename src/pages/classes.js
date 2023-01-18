import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ClassesSection from "../components/sections/classes-section";
import ProgramSection from "../components/sections/program-section";

const ClassesPage = () => {
  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      {/* <ProgramSection /> */}
      <ClassesSection />
    </Layout>
  );
};

export default ClassesPage;
