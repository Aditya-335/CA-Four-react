import React, { useState } from 'react';
import Logo from '../components/quiz.png';

// Component for displaying quiz result and handling dark/light mode
export default function Result({ totalQuestions, correctAnswers, onRestart }) {
  // State variable for managing dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handler for toggling between dark and light mode
  const handleToggleMode = () => {
    // Toggle dark mode state
    setIsDarkMode((prevMode) => !prevMode);

    // Change background color of the body based on dark mode status
    document.body.style.backgroundColor = isDarkMode ? '#A1EEBD' : '#1B4242';

    // Change toggle button text based on dark mode status
    const toggleButton = document.querySelector('.toggle');
    if (toggleButton) {
      toggleButton.innerText = isDarkMode ? 'Light' : 'Dark';
    }

    // Change text color of the name div based on dark mode status
    const nameDiv = document.querySelector('.name');
    if (nameDiv) {
      nameDiv.style.color = isDarkMode ? '#000' : '#fff';
    }

    // Change background color of the result box based on dark mode status
    const resultBox = document.querySelector('.Resultbox');
    if (resultBox) {
      resultBox.style.backgroundColor = isDarkMode ? '#fff' : '#5C8374';
    }
  };

  // Calculate the percentage of correct answers
  const percentage = totalQuestions === 0 ? 0 : ((correctAnswers / totalQuestions) * 100);

  // Render result component based on quiz state
  return (
    <div>
      <div className='name'><h1>Quizbit</h1></div>
      <div className='bulb'><img src={Logo} alt="Quiz Logo" /></div>
      <div className={`Resultbox ${isDarkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: isDarkMode ? '#fff' : '#5C8374' }}>
        <h1 className='res'>Result</h1>
        <div className='score'>
          <h2>{`${correctAnswers} out of ${totalQuestions} correct`}</h2>
        </div>
        <div className='TEXT'>
          <div className='TEXTS'>
            <div className='percent'>
              <b>Percentage:</b> {isNaN(percentage) ? 'N/A' : `${percentage}%`}
            </div>
          </div>
        </div>
        {/* Button for restarting the quiz */}
        <button className='restart' onClick={onRestart}>
          Restart
        </button>
        {/* Button for toggling dark/light mode */}
        <button className='toggle' onClick={handleToggleMode}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}
