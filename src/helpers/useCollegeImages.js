import { useStaticQuery, graphql } from "gatsby";
import map from "lodash/fp/map";
import flow from "lodash/fp/flow";
import value from "lodash/fp/value"

const filenameToName = {
  columbia: ["Columbia", "University"],
  harvard: ["Harvard", "University"],
  mit: ["MIT"],
  upenn_wharton: ["Wharton", "University of Pennsylvania"],
  cmu: ["Carnegie Mellon", "University"],
  princeton: ["Princeton", "University"],
  uchicago: ["University of Chicago"],
  duke: ["Duke", "University"],
  cornell: ["Cornell", "University"],
  sophie_davis: ["Sophie Davis School", "CUNY"],
  brown: ["Brown", "University"],
};

const useCollegeData = () => {
  const data = useStaticQuery(graphql`
    query AllColleges {
      allFile(filter: { absolutePath: { regex: "/colleges/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  // Return array of [{name, fluid}, {name, fluid}, ...]
  return flow(
    map(({ node: { name, childImageSharp: { fixed } } }) => ({
      name: filenameToName[name],
      fixed,
    })),
    value
  )(data.allFile.edges)
};

export default useCollegeData;
