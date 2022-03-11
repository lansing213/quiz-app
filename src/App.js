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
      setFinish(true);
      setShowScore(true);
      setTimeUp(false);
    }

};
// const handleBackButtonClick = (isBack) =>{

//     if(isBack === true){




//     }



// }
// let history = useHistory();



const [countDownDate, setCountDownDate] = useState(new Date().getTime() + (100*1000));
const [days, setDays] = useState();
const [hours,setHours] = useState();
const [mins,setMins] = useState();
const [secs,setSecs] = useState();
const [timeUp,setTimeUp] = useState(false);
const [finish,setFinish] = useState(false);
// const [distance, setDistance] = useState();

// const tempTime = new Date();
const tempTime = new Date();

const timer = () =>{

 
  interval = setInterval(() =>{
    const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance/ (24*60*60*1000));
      const hours = Math.floor((distance % (24*60*60*1000)) /(60*60*1000));
      const mins = Math.floor((distance % (60*60*1000)) /(60*1000));
      const secs = Math.floor((distance % (60*1000)) /1000);
      if(distance < 0){
        console.log(distance);
        clearInterval(interval.current);
        setTimeUp(true);
        setScoreValue((score/questions.length) *100)
        setShowScore(true);
       
         
       
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

{ timeUp && finish==false  ?(<div className='timeUpSection'>Time is up
<div className='scoreSection'> Your score is {scoreValue}

<button onClick={() => window.location.reload()}>Back</button>
</div></div>

) :(<div>

{showScore ? (<div className='scoreSection'> Your score is {scoreValue}
 
<button onClick={() => window.location.reload()}>Back</button>
</div>
) : (    
<div>
<div className= "questionSection">

    <div className='questionNum'>
      Question {current + 1} / {questions.length}      
    </div>
    <div className='timer'>
        Time left {hours}:{mins}:{secs}
</div>

<div className='questionText'>{questions[current].questionText}   </div>





</div>
<div className='answerSection'>{questions[current].options.map((option) => 
<button onClick={() =>handleAnswerButtonClick(option.isCorrect)}>{option.answerText}</button>)}
</div>
</div>
)}
</div>)}



    </div>
  );
}

export default App;
