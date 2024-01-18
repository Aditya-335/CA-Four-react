import React from 'react'

export default function Result() {
  return (
    <div>
       
    <div className='Resultbox'>
      <h1 className='res'>Result</h1>

        <div className='score'>
            <h2>3 out of 5 correct</h2>
        </div>

        <div className='TEXT'>
            <div className='TEXTS'>
                <div><b>Number of correct answers</b></div>
                <div><b>3</b></div>
            </div>

        </div>
        <button className='restart'>Restart</button>
    </div>

    
    </div>
  )
}
