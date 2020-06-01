import moment from "moment";

export const parseDateRange = (startDate, endDate) => {
  const s = moment(startDate, "YYYY-MM-DD");
  const e = moment(endDate, "YYYY-MM-DD");
  const inSameMonth = s.month() === e.month();
  return `${s.format("MMM D")} - ${
    inSameMonth ? e.format("D, YYYY") : e.format("MMM D, YYYY")
  }`;
};

export const parseTimeRange = (startTime, endTime) => {
  const s = moment(startTime, "YYYY-MM-DD hh:mm");
  const e = moment(endTime, "YYYY-MM-DD hh:mm");
  const ifSHasMin = s.minute() !== 0;
  const ifEHasMin = e.minute() !== 0;
  return `${ifSHasMin ? s.format("h:mm") : s.format("h")} - ${
    ifEHasMin ? e.format("h:mm a") : e.format("h a")
  }`;
};
