// Create pages dynamically using Gatsby Node API here.

const path = require("path");

const {
  getClassSchedule,
  getClasses,
  getPrograms,
  getProgramSchedule,
  getFullProgramByKey,
} = require("./src/helpers/dataUtils.js");

exports.createPages = ({ actions: { createPage } }) => {
  const classTemplate = path.resolve("./src/templates/class.js");
  const classesData = getClasses();

  classesData.forEach(classData => {
    createPage({
      path: `/classes/${classData.key}`,
      component: classTemplate,
      context: {
        classData,
        scheduleData: getClassSchedule(classData.key),
      },
    });
  });

  const programTemplate = path.resolve("./src/templates/program.js");
  const programsData = getPrograms();

  programsData.forEach(programData => {
    createPage({
      path: `/programs/${programData.key}`,
      component: programTemplate,
      context: {
        programData: getFullProgramByKey(programData.key),
        scheduleData: getProgramSchedule(programData.key),
      },
    });
  });
};
