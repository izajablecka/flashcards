import "./Flashcard.scss";
import { useState } from "react";

function Flashcard({ question, answer }) {
  const [isReveal, setIsReveal] = useState(false);

  return (
    <>
      <div
        className={"{flip-card ${isReveal}"}
        onClick={() => setIsReveal(!isReveal)}
      ></div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{question}</p>
          </div>
          <div className="flip-card-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Flashcard;
