const _ = require("lodash");
const moment = require("moment");

// TODO: Implement error handling (wrong key, empty class, etc.)

const classesUnparsedData = require("../data/classes.json");
const programsUnparsedData = require("../data/programs.json");

/*
{
  M: [{name, key, 10, 12, duration}, {name, key, 1, 2, duration}]
  T: []
  W: []
  Th: []
  F: []        
}

->

{
  M: [{filler, key, 9, 10, duration},
    {name, key, 10, 12, duration},
    {filler, key, 12, 1, duration},
    {name, key, 1, 2, duration},
    {filler, key, 2, 12am, duration}
  ]
  T: [{filler, key, 9am, 12am, duration}]
  W: [{filler, key, 9am, 12am, duration}]
  Th: [{filler, key, 9am, 12am, duration}]
  F: [{filler, key, 9am, 12am, duration}]        
}
*/
const makeScheduleFromSubjects = subjects => {
  const weekdays = { M: [], T: [], W: [], Th: [], F: [], Sat: [], Sun: [] };

  subjects.forEach(({ name, key, schedule: { days, startTime, endTime } }) => {
    days.forEach((day, day_i) => {
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

  // If schedule blank, just return blank schedule
  if (_.every(_.map(_.values(weekdays), day => day.length === 0)))
    return weekdays;

  // Fill schedule with blanks
  const initialStartTime = moment.min(
    _.map(_.values(_.filter(weekdays, d => d.length)), day =>
      moment(day[0].startTime, "YYYY-MM-DD hh:mm")
    )
  );
  const finalEndTime = moment.max(
    _.map(_.values(_.filter(weekdays, d => d.length)), day =>
      moment(day[day.length - 1].endTime, "YYYY-MM-DD hh:mm")
    )
  );

  var filledWeekdays = { M: [], T: [], W: [], Th: [], F: [], Sat: [], Sun: [] };

  _.keys(weekdays).forEach((weekday, weekday_i) => {
    var lastEndingTime = initialStartTime;
    weekdays[weekday].forEach((block, block_i) => {
      const currentStartTime = moment(block.startTime);
      const diff = currentStartTime.diff(lastEndingTime, "minutes");
      if (diff !== 0) {
        // add filler block
        const newBlock = {
          name: "filler",
          key: "filler",
          startTime: null,
          endTime: null,
          duration: diff,
        };
        filledWeekdays[weekday].push(newBlock);
      }
      // add existing block
      filledWeekdays[weekday].push(block);
      lastEndingTime = moment(block.endTime, "YYYY-MM-DD hh:mm");

      if (block_i === weekdays[weekday].length - 1) {
        // last block
        const lastDiff = finalEndTime.diff(lastEndingTime, "minutes");
        if (lastDiff !== 0) {
          const newBlock = {
            name: "filler",
            key: "filler",
            startTime: null,
            endTime: null,
            duration: lastDiff,
          };
          filledWeekdays[weekday].push(newBlock);
        }
      }
    });
  });

  return filledWeekdays;
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

const getFullProgramByKey = programKey => {
  if (!programKey) return null;
  const foundProgram = _.find(programsData, ["key", programKey]);

  return _.assign({}, foundProgram, {
    subjects: foundProgram.subjects.map(subjectKey =>
      getSubjectByKey(subjectKey)
    ),
  });
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
  getFullProgramByKey,
};
