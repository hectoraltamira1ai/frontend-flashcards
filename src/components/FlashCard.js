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

const FlashCard = ({ selectedCategories }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    setFilteredQuestions(
      questions.filter((question) => selectedCategories.includes(question.category))
    );
    setCurrentQuestion(0);
    setFlipped(false);
  }, [selectedCategories]);

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const interval = setInterval(() => {
        setFlipped((prev) => !prev);
        if (flipped) {
          setCurrentQuestion((prev) => (prev + 1) % filteredQuestions.length);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [filteredQuestions, flipped]);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>
            {filteredQuestions.length > 0 
              ? filteredQuestions[currentQuestion].question 
              : (
                <>
                  Frontend FlashCards
                  <br />
                  select category
                </>
              )
            }
          </h2>
        </div>
        <div className="flip-card-back">
          <h2>{filteredQuestions.length > 0 ? filteredQuestions[currentQuestion].answer : ""}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;