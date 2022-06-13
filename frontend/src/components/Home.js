// import React from "react";
// import { useState } from 'react';
// import  { useEffect } from 'react';
// import userEvent from '@testing-library/user-event';
// function Home() {
  
//       return (
//         <div className="App">
//         {start ? (<div>{ timeUp && finish==false  ?(<div className='timeUpSection'>Time is up
//         <div className='scoreSection'> Your score is {scoreValue}
        
//         <button onClick={() => window.location.reload()}>Back</button>
//         </div></div>
        
//         ) :(<div>
        
//         {showScore ? (<div className='scoreSection'> Your score is {scoreValue}
         
//         <button onClick={() => window.location.reload()}>Back</button>
//         </div>
//         ) : (    
//         <div>
//         <div className= "questionSection">
        
//             <div className='questionNum'>
//               Question {current + 1} / {questions.length}      
//             </div>
//             <div className='timer'>
//                 Time left {hours}:{mins}:{secs}
//         </div>
        
//         <div className='questionText'>{questions[current].questionText}   </div>
        
        
        
        
        
//         </div>
//         <div className='answerSection'>{questions[current].options.map((option) => 
//         <button onClick={() =>handleAnswerButtonClick(option.isCorrect)}>{option.answerText}</button>)}
//         </div>
//         </div>
//         )}
//         </div>)}</div>) :(<div>
        
        
//         <div><p>This test is aim to test candidates' knowledge.{"\n"} You have 10 seconds to finish the test.{"\n"}Your answer will be 
//           automatcally saved when time is up.</p>
//         </div >
//         <div className='startSection'></div><button className='startButton' onClick={() =>{setStart(true);setCountDownDate(new Date().getTime() + (10*1000));}}> Click to begin</button>
        
        
//         </div>)}
//         {/* button to start the quiz */}
        
        
//             </div>
//       );
// }
// export default Home;