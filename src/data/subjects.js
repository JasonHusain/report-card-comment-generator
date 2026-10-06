export const allSubjects = [
  { value: "language", label: "Language" },
  { value: "mathematics", label: "Mathematics" },
  { value: "science", label: "Science and Technology" },
  { value: "socialStudies", label: "Social Studies" },
  { value: "history", label: "History" },
  { value: "geography", label: "Geography" },
  { value: "french", label: "French" }
];

const coreSubjects = ["language", "mathematics", "science"];

export const subjectsByGrade = {
  grade1: [...coreSubjects, "socialStudies"],
  grade2: [...coreSubjects, "socialStudies"],
  grade3: [...coreSubjects, "socialStudies"],
  grade4: [...coreSubjects, "socialStudies", "french"],
  grade5: [...coreSubjects, "socialStudies", "french"],
  grade6: [...coreSubjects, "socialStudies", "french"],
  grade7: [...coreSubjects, "history", "geography", "french"],
  grade8: [...coreSubjects, "history", "geography", "french"]
};
