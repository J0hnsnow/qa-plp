import React, { useState } from "react";

const QuestionCard = ({ question, choices, onNext }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const handleNext = () => {
    if (selectedChoice !== null) {
      onNext(selectedChoice);
      setSelectedChoice(null);
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>{question}</h1>
      <div>
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceSelect(choice)}
            style={{
              backgroundColor: selectedChoice === choice ? "orange" : "white",
              color: selectedChoice === choice ? "white" : "black",
              margin: "5px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuestionCard;
