import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import QuizBanner from './QuizBanner';
import HTMLQuiz from './HTMLQuiz';
import CSSQuiz from './CSSQuiz'
import JSQuiz from './JSQuiz'
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes =()=>{
    const location = useLocation();
    return(
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<QuizBanner/>}></Route>
      <Route path="/html"  element={<HTMLQuiz/>}></Route>
      <Route exact path="/css" element={<CSSQuiz/>}></Route>
      <Route path="/js" element={<JSQuiz/>}></Route>
      <Route element={<h1>Error 404 : Page not found</h1>}></Route>
      </Routes>
    </AnimatePresence>
    )
}


export default AnimatedRoutes