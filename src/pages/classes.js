import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";

const ClassesPage = () => {
	const exampleSubs = ["English","Spanish","Math"];

	return (
		<Layout>
			<SEO title="Classes" />
			<h1>Classes</h1>
			<Infobox subjects={exampleSubs} when="Mondays" type="Zoom" numSessions="4" price="1,000,000/sesh" />
		</Layout>
	);
};

export default ClassesPage;