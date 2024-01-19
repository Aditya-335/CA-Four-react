import React, { useState } from 'react';

export default function Result({ totalQuestions, correctAnswers, onRestart }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    
    setIsDarkMode((prevMode) => !prevMode);

    
    document.body.style.backgroundColor = isDarkMode ? '#A1EEBD' : '#1B4242';

    
    const toggleButton = document.querySelector('.toggle');
    if (toggleButton) {
      toggleButton.innerText = isDarkMode ? 'Light' : 'Dark';
    }

    
    const resultBox = document.querySelector('.Resultbox');
    if (resultBox) {
      resultBox.style.backgroundColor = isDarkMode ? '#fff' : '#5C8374';
    }
  };

  const percentage = totalQuestions === 0 ? 0 : ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <div className={`Resultbox ${isDarkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: isDarkMode ? '#5C8374' : '#fff' }}>
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
        <button className='restart' onClick={onRestart}>
          Restart
        </button>
        <button className='toggle' onClick={handleToggleMode}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}
