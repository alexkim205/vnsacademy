import _ from "lodash";

import classesData from "../data/classes.json";

const subjectsData = _.flatten(_.map(classesData, c => c.subjects));

export const getAllClassesConstants = () => {
  return _.mapValues(_.keyBy(classesData, c => c.key.toUpperCase().replace("-", "_")), "name")
};
