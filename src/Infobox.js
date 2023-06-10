import { useState } from "react";
import Question from "./Question";
import data from "./data";

function InfoBox() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <section className="info-box">
        <h3>Do you have any questions?</h3>

        {questions.map((question, index) => {
          return <Question key={index} {...question} />;
          //   or we could easily define props here
          // return <Question q={question} />
          // then in Question.js
        })}
      </section>
    </div>
  );
}

export default InfoBox;
