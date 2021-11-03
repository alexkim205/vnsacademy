const _ = require("lodash");
const moment = require("moment");

// TODO: Implement error handling (wrong key, empty class, etc.)
const getData = require("./fetchFromFirestore");

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

  if (!subjects || subjects[0] === null) {
    return weekdays;
  }

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
    _.orderBy(weekdays[weekday], ["startTime"], ["asc"]).forEach(
      (block, block_i) => {
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
      }
    );
  });

  return filledWeekdays;
};

// Global variables
let classesData, subjectsData;
let programsData;

const assignVars = async () => {
  const { classes, programs } = await getData();
  classesData = classes;
  subjectsData = _.flatten(_.map(classesData, c => c.subjects));
  programsData = programs;
};

// Classes
const getClasses = async () => {
  if (classesData) {
    return classesData;
  }
  await assignVars();
  return classesData;
};

const getSubjects = async () => {
  if (subjectsData) {
    return subjectsData;
  }
  await assignVars();
  return classesData;
};

const getClassKeys = async () => {
  return _.map(await getClasses(), c => c.key);
};

const getClassByKey = async classKey => {
  if (!classKey) return null;
  return _.find(await getClasses(), ["key", classKey]);
};

const getSubjectKeysInClass = async classKey => {
  if (!classKey) return null;
  return _.find(await getClasses(), ["key", classKey]).subjects.map(s => s.key);
};

const getSubjectKeys = async () => {
  _.map(await getSubjects(), s => s.key);
};

const getSubjectByKey = async subjectKey => {
  if (!subjectKey) return null;
  return _.find(await getSubjects(), ["key", subjectKey]);
};

const getClassSchedule = async classKey => {
  if (!classKey) return null;
  const subjects = (await getClassByKey(classKey)).subjects;
  return makeScheduleFromSubjects(subjects);
};

// Programs

const getPrograms = async () => {
  if (programsData) {
    return programsData;
  }
  await assignVars();
  return programsData;
};

const getProgramByKey = async programKey => {
  if (!programKey) return null;
  return _.find(await getPrograms(), ["key", programKey]);
};

const getFullProgramByKey = async programKey => {
  console.log("program key", programKey)
  if (!programKey) return null;
  const foundProgram = _.find(await getPrograms(), ["key", programKey]);

  return _.assign({}, foundProgram, {
    subjects: await Promise.all(
      foundProgram.subjects.map(subjectKey => getSubjectByKey(subjectKey))
    ),
  });
};

const getProgramSchedule = async programKey => {
  if (!programKey) return null;
  const subjects = await Promise.all(
    (await getProgramByKey(programKey)).subjects.map(subjectKey =>
      getSubjectByKey(subjectKey)
    )
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
