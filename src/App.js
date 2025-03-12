// src/App.js
import React, { useState } from 'react';
import FlashCard from './components/FlashCard';
import './App.css';

const App = () => {
  const [checkedItems, setCheckedItems] = useState({
    HTML: false,
    CSS: false,
    REACT: false,
    GIT: false,
    JAVASCRIPT: false,
  });
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleReset = () => {
    setCheckedItems({
      HTML: false,
      CSS: false,
      REACT: false,
      GIT: false,
      JAVASCRIPT: false,
    });
    setSelectedCategories([]);
  };

  const handleStart = () => {
    const categories = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    setSelectedCategories(categories);
  };

  return (
    <div className="app">
      <h1>Frontend FlashCards</h1>
      <div className="checkboxes">
        {["HTML", "CSS", "REACT", "GIT", "JAVASCRIPT"].map((label) => (
          <label key={label}>
            <input
              type="checkbox"
              checked={checkedItems[label]}
              onChange={() =>
                setCheckedItems((prev) => ({
                  ...prev,
                  [label]: !prev[label],
                }))
              }
            />
            {label}
          </label>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <span style={{ margin: '0 5px' }}></span>
        <button onClick={handleReset}>Reset</button>
      </div>
      <FlashCard selectedCategories={selectedCategories} />
    </div>
  );
};

export default App;
