import _ from "lodash";
import moment from "moment";

// TODO: mplement error handling (wrong key, empty class, etc.)

import classesUnparsedData from "../data/classes.json";

// Cache data with momentized dates/times and just subjects
const classesData = _.map(classesUnparsedData, c =>
  _.assign({}, c, {
    startDate: moment(c.startDate),
    endDate: moment(c.endDate),
    subjects: _.map(c.subjects, s =>
      _.assign({}, s, {
        schedule: {
          ...s.schedule,
          startTime: moment(s.schedule.startTime, "YYYY-MM-DD hh:mm"),
          endTime: moment(s.schedule.endTime, "YYYY-MM-DD hh:mm"),
        },
      })
    ),
  })
);
const subjectsData = _.map(classesData, c => c.subjects);

export const getClassKeys = () => _.map(classesData, c => c.key);

export const getClassByKey = classKey => {
  if (!classKey) return null;
  return _.find(classesData, ["key", classKey]);
};

export const getSubjectKeysInClass = classKey => {
  if (!classKey) return null;
  return _.find(classesData, ["key", classKey]).subjects.map(s => s.key);
};

export const getSubjectKeys = () => _.map(subjectsData, s => s.key);

export const getSubjectByKey = subjectKey => {
  if (!subjectKey) return null;
  return _.find(subjectsData, ["key", subjectKey]);
};

export const getClassSchedule = classKey => {
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
          duration: endTime.diff(startTime, "minutes"),
        },
      ];
    });
  });
  return weekdays;
};
