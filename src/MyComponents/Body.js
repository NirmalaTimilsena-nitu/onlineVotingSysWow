// import React from "react";
import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Do you want to vote this?",
      answerOptions: [
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: true },
        { answerText: "", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
    }
  };
  return (
    <div className="app">
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button
              onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
            ></button>
          ))}
        </div>
      </>
    </div>
  );
}
