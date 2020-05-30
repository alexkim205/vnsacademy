import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import Schedule from "../components/schedule";
import ContainedSection from "../components/sections/contained-section";

const ClassesPage = () => {
  const currSchedule = [
    //Monday
    [
      {
        subject: "SAT English",
        startTime: "1 PM",
        endTime: "2PM",
        duration: 1.5,
        colorInd: 0,
      },
      {
        subject: "SAT Math",
        startTime: "3 PM",
        endTime: "4PM",
        duration: 1,
        colorInd: 1,
      },
    ],
    //Tuesday
    [
      {
        subject: "SAT English",
        startTime: "1 PM",
        endTime: "2PM",
        duration: 1.5,
        colorInd: 0,
      },
    ],
    //Wednesday
    [
      {
        subject: "SAT English",
        startTime: "1 PM",
        endTime: "2PM",
        duration: 1.5,
        colorInd: 0,
      },
    ],
    //Thursday
    [
      {
        subject: "SAT English",
        startTime: "1 PM",
        endTime: "2PM",
        duration: 1.5,
        colorInd: 0,
      },
    ],
    //Friday
    [
      {
        subject: "SAT English",
        startTime: "1 PM",
        endTime: "2PM",
        duration: 1.5,
        colorInd: 0,
      },
    ],
  ];

  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      <ContainedSection>
        <Schedule weekSchedule={currSchedule} />
      </ContainedSection>
    </Layout>
  );
};

export default ClassesPage;
