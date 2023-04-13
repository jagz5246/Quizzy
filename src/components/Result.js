import React from 'react'
import celebrate from '../Images/celebrate.gif'
function Result({score, title, total, mistakes}) {
  console.log(mistakes)
  return (
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
  )
}

export default Result