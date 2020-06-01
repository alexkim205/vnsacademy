import { getAllClassesConstants } from "../helpers/dataUtils.node";

export const ENROLL_REASONS = {
  GROUP: "registering a student for a group class",
  PRIVATE: "registering a student for private tutoring",
  OTHER: "another reason",
};

export const ENROLL_SUBJECTS = {
  ...getAllClassesConstants(),
  OTHER: "another subject",
};

export const HIRING_REASONS = {
  HIRE: "becoming a tutor",
  OTHER: "another reason",
};

export const HIRING_SUBJECTS = {
  SAT_ENGLISH: "SAT English",
  MATH: "Math",
  BIOLOGY: "Biology",
  CHEMISTRY: "Chemistry",
  PHYSICS: "Physics",
  OTHER: "another subject",
};
