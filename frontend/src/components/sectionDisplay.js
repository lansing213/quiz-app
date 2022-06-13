import React from "react";

function SectionDisplay(props) {
  return (
    <div>
      <div className="questionSection">
        <div className="questionNum">
          Question {props.currentQuestion + 1} / {props.questionAmount.length}
        </div>
        {props.hour === 0 && props.min === 0 && props.sec === 0 ? (
          <div className="timer">Time over</div>
        ) : (
          <div className="timer">
            Time left {props.hour}:{props.min}:{props.sec}
          </div>
        )}

        <div className="timer">
          Time left {props.hour}:{props.min}:{props.sec}
        </div>
        <div className="questionText">
          {props.questionAmount[props.currentQuestion].questionText}{" "}
        </div>
      </div>
      <div className="answerSection">
        {props.questionAmount[props.currentQuestion].options.map(
          (option, pos) => (
            <button
              key={pos}
              onClick={() => props.handleClick(option.isCorrect)}
            >
              {option.answerText}
            </button>
          )
        )}
      </div>
    </div>
  );
}
export default SectionDisplay;
