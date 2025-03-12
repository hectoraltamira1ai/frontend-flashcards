// src/components/FlashCard.js
import React, { useState, useEffect } from 'react';
import './FlashCard.css'; // Import the CSS for styling

const questions = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "HTML" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", category: "CSS" },
  { question: "What is React?", answer: "A JavaScript library for building user interfaces", category: "REACT" },
  { question: "What is Git?", answer: "A version control system", category: "GIT" },
  { question: "What is JavaScript?", answer: "A programming language for the web", category: "JAVASCRIPT" },
];

const FlashCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      setFlipped(false);
    }, 2000);
  };

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{questions[currentQuestion].question}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{questions[currentQuestion].answer}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;