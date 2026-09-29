export const allSubjects = [
  { value: "language", label: "Language" },
  { value: "mathematics", label: "Mathematics" },
  { value: "science", label: "Science and Technology" },
  { value: "socialStudies", label: "Social Studies" },
  { value: "history", label: "History" },
  { value: "geography", label: "Geography" },
  { value: "french", label: "French" },
  { value: "islamicStudies", label: "Islamic Studies" },
  { value: "quran", label: "Qur'an" },
  { value: "arabic", label: "Arabic" }
];

const coreSubjects = [
  "language",
  "mathematics",
  "science",
  "french",
  "arabic",
  "islamicStudies",
  "quran"
];

export const subjectsByGrade = {
  juniorKindergarten: [...coreSubjects],
  seniorKindergarten: [...coreSubjects],
  grade1: [...coreSubjects, "socialStudies"],
  grade2: [...coreSubjects, "socialStudies"],
  grade3: [...coreSubjects, "socialStudies"],
  grade4: [...coreSubjects, "socialStudies"],
  grade5: [...coreSubjects, "socialStudies"],
  grade6: [...coreSubjects, "socialStudies"],
  grade7: [...coreSubjects, "history", "geography"],
  grade8: [...coreSubjects, "history", "geography"]
};
