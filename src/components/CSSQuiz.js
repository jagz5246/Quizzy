import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Questions from '../CSSQuestions.json';
import Result from './Result';
import css from '../Images/css.png';
import refresh from '../Images/refresh.png';
import home from '../Images/home.png';

function CSSQuiz() {
    const total = Questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0)
       const [showScore, setShowScore] = useState(false)
       const [score, setScore] = useState(0);
       const [mistakes, setMistakes] = useState([]);
       const handleAnswer = (isCorrect, question) => {
        if(isCorrect === true)
        {
          setScore(score + 1)
        }
        else{
          setMistakes([...mistakes, question])
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
        setMistakes([])
       }  

     return(
      <div className="quiz">
        {showScore?
        (<>
          <Result score={score} title={css} total={total} mistakes={mistakes}/>
          <div className='resultBtns'>
            <button className='play-again' onClick={handlePlayAgain}><img src={refresh} alt='refresh logo'/></button>
            <Link className='homeBtn' to="/"><img src={home} alt='home logo'/></Link>
          </div>
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
                <button key={index} onClick={()=>handleAnswer(answerOption.isCorrect, Questions[currentQuestion].questionText)}>{answerOption.answerText}</button>
              )
            })}
          </div>
          </div>
          )
        }
      </div>
        )
}

export default CSSQuiz