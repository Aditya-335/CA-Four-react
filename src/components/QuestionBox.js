import React from 'react'

export default function QuestionBox() {
  return (
    <div>
       <div className='Quiz-page'>

        <button className='toggle'>Dark</button>

<div className='blankspace'>

  <p className='pages'>1 of 5</p>
  <h2 className='Q'> Question</h2>

  <h4 className='Qs'>React.js is written in which of the following language?</h4>
<div className='firstTwo'>
  <div className='one'>JavaScript</div>
  <div className='two'>Java</div>
</div>

<div className='lastTwo'>
  <div className='three'>C</div>
  <div className='four'>C++</div>
</div>

<div className='Btn'>
  <button className='highlight'>Highlight</button>
  <button className='unhighlight'>Unhighlight</button>
  
</div>

</div>



</div>
      
    </div>
  )
}
