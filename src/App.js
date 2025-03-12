// src/App.js
import React from 'react';
import FlashCard from './components/FlashCard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Frontend FlashCards</h1>
      <div className="checkboxes">
        {["HTML", "CSS", "REACT", "GIT", "JAVASCRIPT"].map((label) => (
          <label key={label}>
            <input type="checkbox" />
            {label}
          </label>
        ))}
      </div>
      <FlashCard />
    </div>
  );
};

export default App;
