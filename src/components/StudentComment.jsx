//React imports
import { useEffect, useRef } from "react";

import "./StudentComment.css";

function StudentComment({
  comment,
  copied,
  onCommentChange,
  commentGenerationSignal,
  onCopyComment,
  onResetForm
}) {
  //Add ref for scrolling to report card comment in "below" workflow
  const generatedCommentRef = useRef(null);

  useEffect(() => {
    if (commentGenerationSignal && generatedCommentRef.current) {
      generatedCommentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [commentGenerationSignal]);

  return (
    commentGenerationSignal > 0 && (
      <div className="generated-comment-div" ref={generatedCommentRef}>
        <>
          <textarea
            className="comment-field"
            name="comment"
            id="comment"
            value={comment}
            onChange={onCommentChange}
          />
          <button className="copy-comment-btn" onClick={onCopyComment}>
            {" "}
            {copied ? "COPIED!" : "COPY COMMENT"}
            {"  "}
          </button>

          <button className="reset-data-btn" onClick={onResetForm}>
            {" "}
            RESET DATA{" "}
          </button>
        </>
      </div>
    )
  );
}

export default StudentComment;
