import _ from "lodash";

import classesData from "../data/classes.json";

export const getAllClassesConstants = () => {
  return _.mapValues(
    _.keyBy(classesData, c => c.key.toUpperCase().replace("-", "_")),
    "name"
  );
};
