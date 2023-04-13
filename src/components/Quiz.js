import React, { useState } from 'react'
import Questions from '../Questions.json';
import Result from './Result';
function Quiz() {

       const [currentQuestion, setCurrentQuestion] = useState(0)
       const [showScore, setShowScore] = useState(false)
       const [score, setScore] = useState(0);

       const handleAnswer = (isCorrect) => {
        if(isCorrect === true)
        {
          setScore(score + 1)
        }
        const nextQues = currentQuestion + 1;
        if(nextQues < Questions.length) setCurrentQuestion(nextQues);
        else{
          setShowScore(true)
        }
       }
       const handlePlayAgain = () =>{
        setScore(0)
        setCurrentQuestion(0)
        setShowScore(false)
       }

     return(
      <div className="quiz">
        {showScore?
        (<>
          <Result score={score}/>
          <button className='play-again' onClick={handlePlayAgain}>Play again</button>
        </>
        ): ( 
        <div className='quiz-flex'>
          <div className='questions'>
          <h1><span className='current'>{currentQuestion+1}</span> / {Questions.length}</h1>
            <h2 className='question'>{Questions[currentQuestion].questionText}</h2>
          </div>
          <div className='answers'>
            {Questions[currentQuestion].answerOptions.map((answerOption, index)=>{
              return (
                <button key={index} onClick={()=>handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
              )
            })}
          </div>
          </div>
          )
        }
      </div>
        )
}
export default Quiz