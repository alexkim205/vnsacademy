const _ = require("lodash");
const moment = require("moment");

// TODO: Implement error handling (wrong key, empty class, etc.)

const classesUnparsedData = require("../data/classes.json");

// Cache data with momentized dates/times and just subjects
// const classesData = _.map(classesUnparsedData, c =>
//   _.assign({}, c, {
//     // startDate: moment(c.startDate),
//     // endDate: moment(c.endDate),
//     subjects: _.map(c.subjects, s =>
//       _.assign({}, s, {
//         schedule: {
//           ...s.schedule,
//           // startTime: moment(s.schedule.startTime, "YYYY-MM-DD hh:mm"),
//           // endTime: moment(s.schedule.endTime, "YYYY-MM-DD hh:mm"),
//         },
//       })
//     ),
//   })
// );
const classesData = classesUnparsedData;
const subjectsData = _.map(classesData, c => c.subjects);

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

module.exports = {
  getClasses,
  getClassKeys,
  getClassByKey,
  getSubjectByKey,
  getSubjectKeys,
  getSubjectKeysInClass,
  getClassSchedule,
};
