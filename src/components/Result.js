import React from 'react';
import {Link} from 'react-router-dom';
import refresh from '../Images/refresh.png';
import home from '../Images/home.png';
import celebrate from '../Images/celebrate.gif';
function Result({score, title, total, mistakes, handlePlayAgain}) {
  console.log(mistakes)
  return (
  <>
    <div className='result-container'>
      <div className='circular-progress'style={{background:`conic-gradient(rgb(20, 97, 184) ${score*10 * 3.6}deg, #ededed 0deg)`}}>
        <h2 className='progress-value'><span>{score}</span> / {total}</h2>
      </div>
      <div className='mistakes'>
      {(mistakes.length >0) ? (
        <>
        <h2>Questions to revisit</h2>
        {mistakes.map((mistake,index)=>{
        return(
          <li className='mistake-list' key={index}>{mistake}</li>
        )
        })}  
        </>) : (
        <div style={{textAlign:"center"}}>
        <img className='celebrate-gif' src={celebrate} alt='celebration gif'/>
        <h2>Woohoo🤩!!!<br/>That was flawless!</h2></div>
      )}
      </div>
    </div>
  <div className='resultBtns'>
    <button className='play-again' onClick={handlePlayAgain}><img src={refresh} alt='refresh logo'/></button>
    <Link className='homeBtn' to="/"><img src={home} alt='home logo'/></Link>
  </div>
  </>
  )
}

export default Result