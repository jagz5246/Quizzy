import React from 'react'
import html from '../Images/html.png';
import {Link} from 'react-router-dom';
import css from '../Images/css.png';
import js from '../Images/js.png';
import title from '../Images/title.png'
import { motion } from 'framer-motion';

function QuizBanner() {
  return (
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{opacity:0}}>
    <div className='title'>
      <img src={title} alt='title logo'/>
      <h2>Quizzy</h2>
    </div>
    <div className='quiz-banner'>
      <div className='quiz-option'>
      <img src={html} alt='html.png'/>
      <h2>HTML5</h2>
      <p className='quiz-desc'>A quick quiz to test your knowledge in HTML5</p>
      <Link className='take-test' to='/html'>Take test</Link>
      </div>
      <div className='quiz-option'>
      <img src={css} alt='css.png'/>
      <h2>CSS3</h2>
      <p className='quiz-desc'>Test your stylesheet skills with this short quiz</p>
      <Link className='take-test' to='/css'>Take test</Link>
      </div>
      <div className='quiz-option'>
      <img src={js} alt='js.png'/>
      <h2>JavaScript</h2>
      <p className='quiz-desc'>A quick quiz to test you JavaScript knowledge</p>
      <Link className='take-test' to='/js'>Take test</Link>
      </div>
    </div>
    </motion.div>
  )
}

export default QuizBanner