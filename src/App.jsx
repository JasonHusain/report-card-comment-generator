//Imports

//Hooks
import { useState } from "react";

//Subject data imports
import { allSubjects, subjectsByGrade } from "./data/subjects.js";

//Strand data imports
import { strandsByGradeAndSubject } from "./data/strands.js";

//Utility imports
import { buildComment } from "./utils/commentUtil.js";

//Import master learning focuses object
import allLearningFocuses from "./data/learning-focuses/allLearningFocuses.js";

//Components
import StudentForm from "./components/StudentForm";
import StudentComment from "./components/StudentComment";

import "./App.css";

function App() {
  //Starting state
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [strand, setStrand] = useState("");
  const [selectedLearningFocuses, setSelectedLearningFocuses] = useState([]);

  //Filter subjects by selected grade level
  const availableSubjects = allSubjects.filter((subject) =>
    subjectsByGrade[gradeLevel]?.includes(subject.value)
  );

  //Available strands by selected grave level and subject
  const availableStrands =
    strandsByGradeAndSubject[gradeLevel]?.[subject] ?? [];

  const availableLearningFocuses =
    allLearningFocuses[gradeLevel]?.[subject]?.[strand] ?? [];

  const [letterGrade, setLetterGrade] = useState("");

  //State for submitted studentData
  const [studentData, setStudentData] = useState(null);

  const [comment, setComment] = useState("");

  //Comment generation signal for useEffect dependency in StudentComment
  const [commentGenerationSignal, setCommentGenerationSignal] = useState(0);

  //Letter grade and strand error states
  const [letterGradeErrorMessage, setLetterGradeErrorMessage] = useState("");
  const [learningFocusErrorMessage, setLearningFocusErrorMessage] =
    useState("");

  //State variable for informing user if comment was copied
  const [copied, setCopied] = useState(false);

  //Event handlers for changes in student form
  function handleStudentNameChange(event) {
    setStudentName(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleGradeLevelChange(event) {
    setGradeLevel(event.target.value);
    setSubject("");
    setStrand("");
    setSelectedLearningFocuses([]);
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
    setStrand("");
    setSelectedLearningFocuses([]);
  }

  function handleStrandChange(event) {
    setStrand(event.target.value);
    setSelectedLearningFocuses([]);
  }

  function handleLearningFocusSelections(event) {
    const { value, checked } = event.target;

    setSelectedLearningFocuses((previousSelections) =>
      checked
        ? [...previousSelections, value]
        : previousSelections.filter((item) => item !== value)
    );
  }

  function handleLetterGradeChange(event) {
    setLetterGrade(event.target.value);
  }

  //Handler for selected student data
  function generateComment(data) {
    setCommentGenerationSignal((prev) => prev + 1);
    setStudentData(data);

    const generatedComment = buildComment(data);
    setComment(generatedComment);
  }

  //Handle Comment Editing
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  //Clear student data when an invalid grade is submitted
  function handleInvalidSubmission() {
    setStudentData(null);
  }

  //Form reset callback
  function resetForm() {
    setStudentName("");
    setGender("");
    setGradeLevel("");
    setSubject("");
    setStrand("");
    setSelectedLearningFocuses([]);
    setLetterGrade("");

    //Reset comment
    setComment("");

    setStudentData(null);

    //Reset comment generation signal ti 0
    //Comment and associated controls will not be rendered
    setCommentGenerationSignal(0);
  }

  //Handler for copying comment
  async function handleCopyComment() {
    try {
      await navigator.clipboard.writeText(comment);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Unable to copy comment.", error);
    }
  }

  return (
    <main className="app-container">
      <>
        <h1 className="app-heading"> Report Card Comment Generator </h1>
        <h2 className="school-name">School Name</h2>

        <StudentForm
          // Props
          //State variables
          studentName={studentName}
          gender={gender}
          gradeLevel={gradeLevel}
          subject={subject}
          strand={strand}
          selectedLearningFocuses={selectedLearningFocuses}
          letterGrade={letterGrade}
          //Error state props
          letterGradeErrorMessage={letterGradeErrorMessage}
          learningFocusErrorMessage={learningFocusErrorMessage}
          //Arrays for mapping strand and subject dropdowns
          availableSubjects={availableSubjects}
          availableStrands={availableStrands}
          availableLearningFocuses={availableLearningFocuses}
          //Using comment generation signal to re-focus Name field
          commentGenerationSignal={commentGenerationSignal}
          //Comment display props
          //Handlers for updating state
          onStudentNameChange={handleStudentNameChange}
          onGenderChange={handleGenderChange}
          onGradeLevelChange={handleGradeLevelChange}
          onSubjectChange={handleSubjectChange}
          onStrandChange={handleStrandChange}
          onLearningFocusChange={handleLearningFocusSelections}
          onLetterGradeChange={handleLetterGradeChange}
          //Props for setting error messages
          onLetterGradeError={setLetterGradeErrorMessage}
          onLearningFocusError={setLetterGradeErrorMessage}
          //Submission callback props
          onFormSubmission={generateComment}
          onInvalidSubmission={handleInvalidSubmission}
        />

        <StudentComment
          comment={comment}
          copied={copied}
          commentGenerationSignal={commentGenerationSignal}
          //Callback props
          onCommentChange={handleCommentChange}
          onCopyComment={handleCopyComment}
          onResetForm={resetForm}
        />
      </>
    </main>
  );
} //End of App() definition

export default App;
