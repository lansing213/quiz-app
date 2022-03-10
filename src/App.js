import logo from './logo.svg';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
// import { useHistory } from "react-router-dom";
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
let interval;
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
const handleBackButtonClick = (isBack) =>{

    if(isBack === true){




    }



}
// let history = useHistory();



const [countDownDate, setCountDownDate] = useState(new Date());
const [days, setDays] = useState();
const [hours,setHours] = useState();
const [mins,setMins] = useState();
const [secs,setSecs] = useState();

// const tempTime = new Date();
const tempTime = new Date();

const timer = () =>{

  setCountDownDate(tempTime.setHours(tempTime.getHours() + 1));
  interval = setInterval(() =>{
    const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance/ (24*60*60*1000));
      const hours = Math.floor((distance % (24*60*60*1000)) /(60*60*1000));
      const mins = Math.floor((distance % (60*60*1000)) /(60*1000));
      const secs = Math.floor((distance % (60*1000)) /1000);
      if(distance < 0){


        clearInterval(interval,current);
      }
      else{
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);

      }


  });


}
useEffect(() => {
  timer();
});
  return (
    <div className="App">












      {showScore ? (<div className='scoreSection'> Your score is {scoreValue}
       
      <button onClick={() => window.location.reload()}>Back</button>
      </div>
) : (    
<div>
  <div className= "questionSection">
<div className='questionNum'>
<span>Question {current + 1} / {questions.length} </span>
  </div><div className='timer'>
  <section>
    Time left {hours}:{mins}:{secs}

  </section>
  
  
  
  
  
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
