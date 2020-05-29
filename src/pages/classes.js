import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import Schedule from "../components/schedule";


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
	const exampleSubs = ["Spanish","Math"];

	return (
		<Layout>
			<SEO title="Classes" />
			<h1>Classes</h1>
			<Infobox subjects={exampleSubs} when="Mondays" type="Zoom" numSessions="4" price="1,000,000/sesh" />
			<Schedule weekSchedule={currSchedule} />
		</Layout>
	);
};

export default ClassesPage;