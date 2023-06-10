import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function Question({ props }) {
  const [showInfo, setShowInfo] = useState("false");
  return (
    <section className="info-box">
      <h3>Do you have any questions?</h3>
      <div className="question">
        <header>
          <h4>Question 1?</h4>
          <span onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}{" "}
          </span>
        </header>
        {showInfo && (
          <p>
            Duis sint incididunt ea culpa eu est commodo mollit laboris fugiat.
          </p>
        )}
      </div>
    </section>
  );
}

export default Question;
