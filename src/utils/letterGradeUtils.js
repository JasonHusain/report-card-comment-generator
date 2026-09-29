import { validLetterGrades } from "../data/validLetterGrades";

//Trim whitespace and lowercase to uppercase letters
export function normalizeLetterGrade(letterGrade) {
  return letterGrade.trim().toUpperCase();
}

export function checkGradeValidity(letterGrade) {
  const isValidGrade = validLetterGrades.includes(letterGrade);
  return isValidGrade;
}
