import React, { useState } from 'react';
import Logo from '../components/quiz.png';
import Result from './Result';
import questions from '../questions';

// Main component for rendering quiz questions and managing state
export default function QuestionBox() {
  // State variables for managing quiz progress, scores, and styling
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handler for processing user's answer to a question
  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption.isCorrect;
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    // Check if there are more questions or if the quiz is finished
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Handler for restarting the quiz
  const handleRestart = () => {
    setIndex(0);
    setCorrectAnswers(0);
    setIsQuizFinished(false);
  };

  // Handler for highlighting the correct answer in a question
  const handleHighlight = () => {
    const correctOption = questions[index].options.find((opt) => opt.isCorrect);
    setHighlightedOption(correctOption.id);
    setHighlightedQuestion(true);
  };

  // Handler for unhighlighting the correct answer in a question
  const handleUnhighlight = () => {
    setHighlightedQuestion(false);
  };

  // Handler for toggling between dark and light mode
  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Change background color based on dark mode status
    document.body.style.backgroundColor = isDarkMode ? '#A1EEBD' : '#1B4242';

    // Change specific element colors based on dark mode status
    const blankspaceDiv = document.querySelector('.blankspace');
    if (blankspaceDiv) {
      blankspaceDiv.style.backgroundColor = isDarkMode ? '#fff' : '#5C8374';
    }

    const nameDiv = document.querySelector('.name');
    if (nameDiv) {
      nameDiv.style.color = isDarkMode ? '#000' : '#fff';
    }

    // Change toggle button text based on dark mode status
    const toggleButton = document.querySelector('.toggle');
    if (toggleButton) {
      toggleButton.innerText = isDarkMode ? 'Light' : 'Dark';
    }
  };

  // Render quiz component based on quiz state
  return (
    <div>
      {isQuizFinished ? (
        // Render result component when quiz is finished
        <Result
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          onRestart={handleRestart}
        />
      ) : (
        // Render quiz interface when quiz is ongoing
        <div>
          <div className='name'>
            <h1>Quizbit</h1>
          </div>
          <div className='bulb'>
            <img src={Logo} alt="Quiz Logo" />
          </div>
          <div className={`Quiz-page ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Toggle button for dark/light mode */}
            <button className='toggle' onClick={handleToggleMode}>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
            <div className={`blankspace ${highlightedQuestion ? 'highlighted' : ''}`}>
              {/* Display question number and text */}
              <p className='pages'>{`${index + 1} of ${questions.length}`}</p>
              <h2 className='Qs' style={{ color: highlightedQuestion ? '#BF3131' : 'black' }}>
                {questions[index].text}
              </h2>
              {/* Render answer options */}
              <div className='options'>
                {questions[index].options.map((option) => (
                  <div
                    key={option.id}
                    className={`option ${highlightedOption === option.id ? 'highlighted' : ''}`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
              {/* Buttons for highlighting and unhighlighting correct answer */}
              <div className='Btn'>
                <button className='highlight' onClick={handleHighlight}>
                  Highlight
                </button>
                <button className='unhighlight' onClick={handleUnhighlight}>
                  Unhighlight
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
