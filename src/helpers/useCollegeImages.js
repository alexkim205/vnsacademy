import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";

const useCollegeData = () => {
  const data = useStaticQuery(graphql`
    query AllColleges {
      allFile(filter: { absolutePath: { regex: "/colleges/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 130) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  // Return array of [{name, fluid}, {name, fluid}, ...]
  return _(data.allFile.edges)
    .map(({ node: { name, childImageSharp: { fixed } } }) => ({
      name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
      fixed,
    }))
    .value();
};

export default useCollegeData;
