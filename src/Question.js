import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
// in here we could write
// function Question ({q})
// And then when we need them  invoke them as below
// {q.title} or {q.info}
function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <span onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}{" "}
        </span>
      </header>
      {showInfo && <p>{info} </p>}
    </div>
  );
}

export default Question;
