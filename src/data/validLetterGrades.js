export const validLetterGrades = [
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "R",
  "I"
];

export const qualifiersByLetterGrade = {
  "A+": {
    adjective: "an excellent",
    verb: "consistently demonstrates",
    nextStep: "continue to extend and deepen"
  },

  A: {
    adjective: "an excellent",
    verb: "demonstrates",
    nextStep: "continue to extend and refine"
  },

  "A-": {
    adjective: "an excellent",
    verb: "generally demonstrates",
    nextStep: "continue to refine"
  },

  "B+": {
    adjective: "a good",
    verb: "consistently demonstrates",
    nextStep: "continue to develop and refine"
  },

  B: {
    adjective: "a good",
    verb: "demonstrates",
    nextStep: "continue to develop"
  },

  "B-": {
    adjective: "a good",
    verb: "generally demonstrates",
    nextStep: "continue to develop and strengthen"
  },

  "C+": {
    adjective: "a satisfactory",
    verb: "consistently demonstrates",
    nextStep: "continue to strengthen"
  },

  C: {
    adjective: "a satisfactory",
    verb: "demonstrates",
    nextStep: "continue to practise and strengthen"
  },

  "C-": {
    adjective: "a satisfactory",
    verb: "sometimes demonstrates",
    nextStep: "continue to practise and develop"
  },

  "D+": {
    adjective: "a limited",
    verb: "demonstrates",
    nextStep: "focus on practising and strengthening"
  },

  D: {
    adjective: "a limited",
    verb: "sometimes demonstrates",
    nextStep: "focus on practising and developing"
  },

  "D-": {
    adjective: "a limited",
    verb: "requires support to demonstrate",
    nextStep: "continue to practise and develop with support"
  }
};
