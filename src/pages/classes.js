import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import Schedule from "../components/schedule";
import ContainedSection from "../components/sections/contained-section";
import ButtonSection from "../components/sections/button-section"

const currSchedule = [
	//Monday
	[ {
			subject: "SAT English", 
			startTime: "1 PM", 
			endTime: "2PM", 
			duration: 1.5, 
			colorInd: 0
		}, 
		{
			subject:"SAT Math",
			startTime: "3 PM", 
			endTime: "4PM", 
			duration: 1, 
			colorInd: 1} 
	],
	//Tuesday
	[ {
			subject: "SAT English", 
			startTime: "1 PM", 
			endTime: "2PM", 
			duration: 1.5, 
			colorInd: 0
		}
	],
	//Wednesday
	[ {
			subject: "SAT English", 
			startTime: "1 PM", 
			endTime: "2PM", 
			duration: 1.5, 
			colorInd: 0
		}
	],
	//Thursday
	[ {
			subject: "SAT English", 
			startTime: "1 PM", 
			endTime: "2PM", 
			duration: 1.5, 
			colorInd: 0
		}
	],
	//Friday
	[ {
			subject: "SAT English", 
			startTime: "1 PM", 
			endTime: "2PM", 
			duration: 1.5, 
			colorInd: 0
		}
	]
];

const buttons = [
	{
		message: "Interested in enrolling?",
		buttonTitle: "Reseve your spot now"
	},
	{
		message: "Want a private tutor?",
		buttonTitle: "Contact Us"
	}
];

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
        <Schedule weekSchedule={currSchedule} />
        <ButtonSection buttons={buttons} />
      </ContainedSection>
    </Layout>
  );
};

export default ClassesPage;
