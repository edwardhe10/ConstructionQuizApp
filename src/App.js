import "./App.css";
import React, { useState } from "react";

const quizData = [
  {
    question: "What is the primary component of concrete?",
    options: ["Sand", "Cement", "Water", "Gravel"],
    correctAnswer: "Cement",
  },
  {
    question:
      "Which material is commonly used for framing in residential construction?",
    options: ["Steel", "Concrete", "Timber", "Brick"],
    correctAnswer: "Timber",
  },
  {
    question: "What type of material is used to waterproof roofs?",
    options: ["Tiles", "Shingles", "Tar", "Rubber"],
    correctAnswer: "Tar",
  },
  // Add more questions here
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const shuffleArray = (array) => {
    // Shuffle an array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    shuffleArray(quizData); // Randomize
  };

  return (
    <div className="quiz-app">
      <h1>Construction Quiz</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}!
          <div>
            <button onClick={resetQuiz}>Retry</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
