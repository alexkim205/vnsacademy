// Create pages dynamically using Gatsby Node API here.

const path = require("path");

const { getClassSchedule, getClasses } = require("./src/helpers/dataUtils.js");

exports.createPages = ({ actions: { createPage } }) => {
  const template = path.resolve("./src/templates/class.js");
  const classesData = getClasses();

  classesData.forEach(classData => {
    createPage({
      path: `/classes/${classData.key}`,
      component: template,
      context: {
        classData,
        scheduleData: getClassSchedule(classData.key),
      },
    });
  });
};
