import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizBanner from './components/QuizBanner';
import HTMLQuiz from './components/HTMLQuiz';
import CSSQuiz from './components/CSSQuiz'
import JSQuiz from './components/JSQuiz'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" exact element={<QuizBanner/>}></Route>
      <Route path="/html"  element={<HTMLQuiz/>}></Route>
      <Route exact path="/css" element={<CSSQuiz/>}></Route>
      <Route path="/js" element={<JSQuiz/>}></Route>
      <Route element={<h1>Error 404 : Page not found</h1>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
