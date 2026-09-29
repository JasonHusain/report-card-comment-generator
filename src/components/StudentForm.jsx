//React hook imports

//Imports
//Hooks
import { useState, useEffect, useRef } from "react";
import "./StudentForm.css";

//Data modules
import { genders } from "../data/genders.js";
import gradeLevels from "../data/gradeLevels.js";
import { allSubjects } from "../data/subjects.js";
import { validLetterGrades } from "../data/validLetterGrades.js";

//Utility imports
import {
  normalizeLetterGrade,
  checkGradeValidity
} from "../utils/letterGradeUtils.js";

function StudentForm({
  //State variable props
  studentName,
  gender,
  gradeLevel,
  subject,
  strand,
  selectedLearningFocuses,
  letterGrade,

  letterGradeErrorMessage,
  learningFocusErrorMessage,

  //Arrays for rendering subjects and strands
  availableSubjects,
  availableStrands,
  availableLearningFocuses,

  //Focus signal prop
  commentGenerationSignal,
  //Change handler props
  onStudentNameChange,
  onGenderChange,
  onGradeLevelChange,
  onSubjectChange,
  onStrandChange,
  onLearningFocusChange,
  onLetterGradeChange,

  //Form submission prop

  //Setting error states and preventing submission
  onLetterGradeError,
  onLearningFocusError,
  onInvalidSubmission,

  //Valid submission
  onFormSubmission
}) {
  //Letter grade normalization and validation
  const normalizedLetterGrade = normalizeLetterGrade(letterGrade);
  const isValidGrade = checkGradeValidity(normalizedLetterGrade);

  function handleSubmission(event) {
    event.preventDefault();

    if (!isValidGrade) {
      onLetterGradeError("Error: Please enter a valid letter grade.");

      //Clear student data upon invalid submission
      onInvalidSubmission();
      return;
    }

    if (selectedLearningFocuses.length === 0 && normalizedLetterGrade !== "I") {
      onLearningFocusError("Error: Please select at least one learning focus.");

      //Clear student data upon invalid submission
      onInvalidSubmission();
      return;
    }

    //Successful submission logic
    //Reset error messages to empty string
    onLetterGradeError("");
    onLearningFocusError("");

    //Create object with data for selected student
    const studentData = {
      studentName,
      gender,
      gradeLevel,
      subject,
      strand,
      selectedLearningFocuses,
      normalizedLetterGrade
    };

    onFormSubmission(studentData);
  }

  //First field ref and focus effect
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!commentGenerationSignal) {
      firstFieldRef.current.focus();
    }
  }, [commentGenerationSignal]);

  return (
    <form className="student-form" onSubmit={handleSubmission}>
      {/* Student Name Input */}
      <div className="form-group">
        <label className="input-heading" htmlFor="studentName">
          {" "}
          Student Name{" "}
        </label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={onStudentNameChange}
          required
          ref={firstFieldRef}
        />
      </div>

      {/* Gender Dropdown */}
      <div className="form-group">
        <label className="input-heading" htmlFor="gender">
          {" "}
          Gender{" "}
        </label>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={onGenderChange}
          required
        >
          <option value=""> Select Gender </option>
          {genders.map((gender) => (
            <option key={gender.value} value={gender.value}>
              {" "}
              {gender.label}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* Grade Level Dropdown */}
      <div className="form-group">
        <label className="input-heading" htmlFor="gradeLevel">
          {" "}
          Grade Level{" "}
        </label>
        <select
          name="gradeLevel"
          id="gradeLevel"
          value={gradeLevel}
          onChange={onGradeLevelChange}
          required
        >
          <option value=""> Select Grade Level </option>
          {gradeLevels.map((gradeLevel) => (
            <option key={gradeLevel.value} value={gradeLevel.value}>
              {" "}
              {gradeLevel.label}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Dropdown */}
      <div className="form-group">
        <label className="input-heading" htmlFor="subject">
          {" "}
          Subject{" "}
        </label>
        <select
          name="subject"
          id="subject"
          value={subject}
          onChange={onSubjectChange}
          required
        >
          <option value=""> Select Subject </option>
          {/* Subjects */}
          {availableSubjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {" "}
              {subject.label}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* Strand Dropdown */}
      <div className="form-group">
        <label className="input-heading" htmlFor="strand">
          {" "}
          Strand (not required for insufficient grade){" "}
        </label>
        <select
          name="strand"
          id="strand"
          value={strand}
          onChange={onStrandChange}
          required={normalizedLetterGrade !== "I"}
        >
          <option value=""> Select Strand </option>
          {/* Strands */}
          {availableStrands.map((strand) => (
            <option key={strand.value} value={strand.value}>
              {" "}
              {strand.label}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* Learning Focus checkboxes */}
      <fieldset className="form-group learning-focus-fieldset">
        <legend className="input-heading">
          {" "}
          Learning Focus {strand ? "" : "(Strand selection required)"}
        </legend>
        {/* Learning Focus Checklist */}
        <div className="learning-focus-list">
          {availableLearningFocuses.map((option) => (
            <label
              className="learning-focus-item"
              htmlFor={option.value}
              key={option.value}
            >
              {" "}
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={selectedLearningFocuses.includes(option.value)}
                onChange={onLearningFocusChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Letter Grade Input */}
      <div className="form-group">
        <label className="input-heading" htmlFor="letterGrade">
          {" "}
          Letter Grade (+/- are valid){" "}
        </label>
        <input
          type="text"
          id="letterGrade"
          value={letterGrade}
          onChange={onLetterGradeChange}
          required
        />
        {/* Error Messages */}
        <p className="letter-grade-error-message">
          {" "}
          {letterGradeErrorMessage}{" "}
        </p>
        <p className="learning-focus-error-message">
          {" "}
          {learningFocusErrorMessage}{" "}
        </p>
      </div>

      <button className="generate-comment-btn" type="submit">
        {" "}
        GENERATE COMMENT{" "}
      </button>
    </form>
  );
}

export default StudentForm;
