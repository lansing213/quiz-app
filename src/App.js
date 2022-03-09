import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {
  const questions = [
    {
      questionText: "Who is the CEO of Microsoft?",
      options:[
        {answerText: "Bill Gates", isCorrect: true},
        {answerText:"Ludacris", isCorrect:false},
        {answerText:"Henry Morgton", isCorrect:false},
        {answerText:"Amanda Smith", isCorrect:false}

      ],




  },
  {
    questionText: "What is the official currancy in Japan?",
    options:[
      {answerText:"Euro", isCorrect:false},
      {answerText:"Bitcoin", isCorrect:false},
      {answerText:"Yen", isCorrect:false},
      {answerText: "Dollar", isCorrect: true}


    ],




},
{
  questionText: "Facebook is a what kind of app?",
  options:[
    {answerText:"Entertainment", isCorrect:false},
    {answerText:"Productivity", isCorrect:false},
    {answerText:"Education", isCorrect:false},
    {answerText: "Socilizing", isCorrect: true}


  ],




},
{
  questionText: "New York in what country?",
  options:[
    {answerText:"Japan", isCorrect:false},
    {answerText:"France", isCorrect:false},
    {answerText:"America", isCorrect:false},
    {answerText: "Brazil", isCorrect: true}


  ],




},
]
const [current, setCurrent] = useState(0);
const [score, setScore] = useState(0);
const [showScore,setShowScore] = useState(false);
const [scoreValue,setScoreValue ]= useState(0);

const handleAnswerButtonClick = (isCorrect) =>{

    if(isCorrect === true){
      setScore(score + 1 );
    }
    const nextQuestion = current + 1;
    if(nextQuestion < questions.length){
      setCurrent(nextQuestion);
    } 
    else{
      // alert("Congrats, you finished the quiz!");
      setScoreValue((score/questions.length) *100)
      setShowScore(true);

    }

};
  return (
    <div className="App">
      {showScore ? (      <div className='scoreSection'> Your score is {scoreValue}
      </div>
) : (    
<div>
  <div className= "questionSection">
<div className='questionNum'>
<span>Question {current + 1} / {questions.length} </span>
  </div>
  <div className='questionText'>{questions[current].questionText}</div>
      </div>
<div className='answerSection'>{questions[current].options.map((option) => 
<button onClick={() =>handleAnswerButtonClick(option.isCorrect)}>{option.answerText}</button>)}
</div>
</div>
)}
 
    </div>
  );
}

export default App;
