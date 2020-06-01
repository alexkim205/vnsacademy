const _ = require("lodash");
const moment = require("moment");

// TODO: Implement error handling (wrong key, empty class, etc.)

const classesUnparsedData = require("../data/classes.json");
const programsUnparsedData = require("../data/programs.json");

const makeScheduleFromSubjects = subjects => {
  const weekdays = { M: [], T: [], W: [], Th: [], F: [] };

  subjects.forEach(({ name, key, schedule: { days, startTime, endTime } }) => {
    days.forEach(day => {
      weekdays[day] = [
        ...weekdays[day],
        {
          name,
          key,
          startTime,
          endTime,
          duration: moment(endTime).diff(moment(startTime), "minutes"),
        },
      ];
    });
  });
  return weekdays;
};

// Classes
const classesData = classesUnparsedData;

const subjectsData = _.flatten(_.map(classesData, c => c.subjects));

const getClasses = () => classesData;

const getClassKeys = () => _.map(classesData, c => c.key);

const getClassByKey = classKey => {
  if (!classKey) return null;
  return _.find(classesData, ["key", classKey]);
};

const getSubjectKeysInClass = classKey => {
  if (!classKey) return null;
  return _.find(classesData, ["key", classKey]).subjects.map(s => s.key);
};

const getSubjectKeys = () => _.map(subjectsData, s => s.key);

const getSubjectByKey = subjectKey => {
  if (!subjectKey) return null;
  return _.find(subjectsData, ["key", subjectKey]);
};

const getClassSchedule = classKey => {
  if (!classKey) return null;
  const subjects = getClassByKey(classKey).subjects;
  return makeScheduleFromSubjects(subjects);
};

// Programs

const programsData = programsUnparsedData;

const getPrograms = () => programsData;

const getProgramByKey = programKey => {
  if (!programKey) return null;
  return _.find(programsData, ["key", programKey]);
};

const getProgramSchedule = programKey => {
  if (!programKey) return null;
  const subjects = getProgramByKey(programKey).subjects.map(subjectKey =>
    getSubjectByKey(subjectKey)
  );
  return makeScheduleFromSubjects(subjects);
};

module.exports = {
  getClasses,
  getClassKeys,
  getClassByKey,
  getSubjectByKey,
  getSubjectKeys,
  getSubjectKeysInClass,
  getClassSchedule,
  getPrograms,
  getProgramSchedule,
};
