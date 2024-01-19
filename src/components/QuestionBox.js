import React, { useState } from 'react';
import Logo from '../components/quiz.png';
import Result from './Result';
import questions from '../questions';

export default function QuestionBox() {
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption.isCorrect;
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setCorrectAnswers(0);
    setIsQuizFinished(false);
  };

  const handleHighlight = () => {
    const correctOption = questions[index].options.find((opt) => opt.isCorrect);
    setHighlightedOption(correctOption.id);
    setHighlightedQuestion(true);
  };

  const handleUnhighlight = () => {
    setHighlightedQuestion(false);
  };

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    document.body.style.backgroundColor = isDarkMode ? '#A1EEBD' : '#1B4242';

    const blankspaceDiv = document.querySelector('.blankspace');
    if (blankspaceDiv) {
      blankspaceDiv.style.backgroundColor = isDarkMode ? '#fff' : '#5C8374';
    }

    const toggleButton = document.querySelector('.toggle');
    if (toggleButton) {
      toggleButton.innerText = isDarkMode ? 'Light' : 'Dark';
    }
  };

  return (
    <div>
      {isQuizFinished ? (
        <Result
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          onRestart={handleRestart}
        />
      ) : (
        <div>
          <div className='bulb'>
            <img src={Logo} alt="Quiz Logo" />
          </div>
          <div className={`Quiz-page ${isDarkMode ? 'dark-mode' : ''}`}>
            <button className='toggle' onClick={handleToggleMode}>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
            <div className={`blankspace ${highlightedQuestion ? 'highlighted' : ''}`}>
              <p className='pages'>{`${index + 1} of ${questions.length}`}</p>
              <h2 className='Qs' style={{ color: highlightedQuestion ? '#BF3131' : 'black' }}>
                {questions[index].text}
              </h2>
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
