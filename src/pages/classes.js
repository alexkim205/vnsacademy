import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import Schedule from "../components/schedule";
import ContainedSection from "../components/sections/contained-section";

const currSchedule = [
	//Monday
	[ {
		name: "SAT English", 
		startTime: "1 PM", 
		endTime: "2PM", 
		duration: 1.5, 
		colorInd: 0
		}, 
		{"SAT Math", "3 PM", "4PM", "1", "1"} ],
	//Tuesday
	[ ["SAT English", "1 PM", "2PM", "1", "0"] ],
	//Wednesday
	[ ["SAT English", "1 PM", "2PM", "1", "0"] ],
	//Thursday
	[ ["SAT English", "1 PM", "2PM", "1", "0"] ],
	//Friday
	[ ["SAT English", "1 PM", "2PM", "1", "0"] ]
];

const ClassesPage = () => {
  const classInfo = {
    subjects: ["SAT English + Writing", "SAT Math"],
    when: "July 1 - August 31, 2020",
    type: "Group (Zoom)",
    numSessions: 32,
  };
  return (
    <Layout>
      <SEO title="Classes" />
      <ContainedSection>
        <Infobox classInfo={classInfo} />
        <Schedule weekSchedule={currSchedule} />
      </ContainedSection>
    </Layout>
  );
};

export default ClassesPage;
