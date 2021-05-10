// Create pages dynamically using Gatsby Node API here.

const path = require("path");

const {
  getClassSchedule,
  getClasses,
  getPrograms,
  getProgramSchedule,
  getFullProgramByKey,
} = require("./src/helpers/dataUtils.js");

exports.createPages = async ({ actions: { createPage } }) => {
  const classTemplate = path.resolve("./src/templates/class.js");
  const classesData = await getClasses();

  console.log("classesDat", classesData);

  let classPageData;
  try {
    classPageData = await Promise.all(
      classesData.map(async classData => ({
        path: `/classes/${classData.key}`,
        component: classTemplate,
        context: {
          classData,
          scheduleData: await getClassSchedule(classData.key),
        },
      }))
    );
  } catch (error) {
    throw new Error("Error fetching classes data " + error.message);
  }

  for (const c of classPageData) {
    createPage(c);
  }

  const programTemplate = path.resolve("./src/templates/program.js");
  const programsData = await getPrograms();

  let programPageData;
  try {
    programPageData = await Promise.all(
      programsData.map(async programData => ({
        path: `/programs/${programData.key}`,
        component: programTemplate,
        context: {
          programData: await getFullProgramByKey(programData.key),
          scheduleData: await getProgramSchedule(programData.key),
        },
      }))
    );
  } catch (error) {
    console.log(error);
  }

  for (const p of programPageData) {
    createPage(p);
  }
};
