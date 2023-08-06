/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionCard from "./components/QuestionCard"; // Check the correct path
import QuestionWheel from "./components/QuestionWheel"; // Check the correct path
import Congratulations from "./components/Congratulations"; // Check the correct path
import WrongAnswers from "./components/WrongAnswers"; // Check the correct path

const QuizApp = () => {
  // Define your 10 questions and answers this area
  const questions = [
    // Question objects with question text and choices
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // eslint-disable-next-line no-undef
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (selectedChoice) => {
    setUserAnswers([...userAnswers, selectedChoice]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {currentQuestionIndex < 10 ? (
            <QuestionCard
              question={questions[currentQuestionIndex].question}
              choices={questions[currentQuestionIndex].choices}
              onNext={handleNextQuestion}
            />
          ) : (
            <QuestionWheel />
          )}
        </Route>
        <Route path="/congratulations">
          <Congratulations />
        </Route>
        <Route path="/wrong-answers">
          <WrongAnswers />
        </Route>
      </Switch>
    </Router>
  );
};

export default QuizApp;
