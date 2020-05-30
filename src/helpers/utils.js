import moment from "moment";

export const parseDateRange = (startDate, endDate) => {
  const s = moment(startDate, "YYYY-MM-DD");
  const e = moment(endDate, "YYYY-MM-DD");
  const inSameMonth = s.month() === e.month();
  return `${s.format("MMM. D")} - ${
    inSameMonth ? s.format("D, YYYY") : s.format("MMM. D, YYYY")
  }`;
};

export const parseDuration = (startTime, endTime) => {};
