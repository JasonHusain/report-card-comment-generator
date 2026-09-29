//Import dropdown data for displaying labels
import gradeLevels from "../data/gradeLevels.js";
import allAchievementStatements from "../data/achievement-statements/allAchievementStatements.js";

import { pronouns } from "../data/genders.js";
import { allSubjects } from "../data/subjects.js";
import { strandsByGradeAndSubject } from "../data/strands.js";
import { qualifiersByLetterGrade } from "../data/validLetterGrades.js";
import { requestFormReset } from "react-dom";

export function buildComment(studentData) {
  if (!studentData) {
    return null;
  }

  //Optional chaining to find and display object attributes
  const {
    studentName,
    gender,
    gradeLevel,
    subject,
    strand,
    selectedLearningFocuses,
    normalizedLetterGrade
  } = studentData;

  //Optional chaining to find labels
  const personalPronoun = pronouns[gender]?.personal;
  const objectivePronoun = pronouns[gender]?.objective;
  const possessivePronoun = pronouns[gender]?.possessive;

  const selectedGradeLevel = gradeLevels.find(
    (option) => option.value === gradeLevel
  )?.label;

  const selectedSubject = allSubjects.find(
    (option) => option.value === subject
  )?.label;

  const selectedStrand = strandsByGradeAndSubject[gradeLevel]?.[subject]?.find(
    (option) => option.value === strand
  )?.label;

  //Achievement statement information
  const achievementStatements = selectedLearningFocuses.map(
    (learningFocus) =>
      allAchievementStatements[gradeLevel]?.[subject]?.[strand]?.[learningFocus]
  );

  //All achievement statements except for the last statement
  const firstAchievementStatementsArray = achievementStatements.slice(
    0,
    achievementStatements.length - 1
  );

  const firstAchievementStatementsString =
    firstAchievementStatementsArray.join(", ");

  //Last achievement statement
  const lastAchievementStatementString = achievementStatements.slice(-1);

  const fullAchievementStatementString =
    achievementStatements.length > 1
      ? `${firstAchievementStatementsString} and ${lastAchievementStatementString}`
      : `${lastAchievementStatementString}`;

  const skillStatement =
    selectedLearningFocuses === 1 ? "this skill" : "these skills";

  //Qualifier adjective and verb according to letter grade
  const adjectiveQualifier =
    qualifiersByLetterGrade[normalizedLetterGrade]?.adjective;

  const nextStep = qualifiersByLetterGrade[normalizedLetterGrade]?.nextStep;

  const verbQualifier = qualifiersByLetterGrade[normalizedLetterGrade]?.verb;

  //Generated achievement statements from selected learning focuses

  //Comment for a letter grade of A+ to D-
  const standardAchievementComment =
    `${studentName} ${verbQualifier} ${adjectiveQualifier} level of achievement in ${selectedSubject}.\n\n` +
    `${personalPronoun} demonstrates the ability to ${fullAchievementStatementString}.\n\n` +
    `${studentName} should ${nextStep} ${skillStatement} as ${personalPronoun} progresses.`;

  //Comment for a remedial grade (R)
  const remedialAchievementComment =
    `${studentName} requires significant support to meet the expectations in ${selectedSubject}.\n\n` +
    `${personalPronoun} requires support to develop ${possessivePronoun} ability to ${fullAchievementStatementString}.\n\n` +
    `${studentName} should continue to practice and develop ${skillStatement} with support as ${personalPronoun} progresses.`;

  //Comment for insufficient achievement (I)
  const insufficientAchievementComment =
    `${studentName} has not yet provided sufficient evidence to determine a level of achievement in ${selectedSubject}.\n\n` +
    `There is currently insufficient evidence to assess ${possessivePronoun} understanding of the required knowledge and skills.\n\n` +
    `${studentName} should continue to complete learning activities and demonstrate ${possessivePronoun} understanding of the course expectations.`;

  //Conditional returns
  if (normalizedLetterGrade === "R") {
    return remedialAchievementComment;
  } else if (normalizedLetterGrade === "I") {
    return insufficientAchievementComment;
  } else {
    return standardAchievementComment;
  }
}
