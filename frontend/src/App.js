import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./index.css";
import StartSection from "./components/StartSection";
import SectionDisplay from "./components/SectionDisplay";
// import { useHistory } from "react-router-dom";

let score = 0;
let scoreValue = 0;
function App() {
    // initializes questions
    const questions = [
        {
            questionText: "Who is the CEO of Microsoft?",
            options: [
                { answerText: "Bill Gates", isCorrect: true },
                { answerText: "Ludacris", isCorrect: false },
                { answerText: "Henry Morgton", isCorrect: false },
                { answerText: "Amanda Smith", isCorrect: false },
            ],
        },
        {
            questionText: "What is the official currancy in Japan?",
            options: [
                { answerText: "Euro", isCorrect: false },
                { answerText: "Bitcoin", isCorrect: false },
                { answerText: "Yen", isCorrect: true },
                { answerText: "Dollar", isCorrect: false },
            ],
        },
        {
            questionText: "Facebook is a what kind of app?",
            options: [
                { answerText: "Entertainment", isCorrect: false },
                { answerText: "Productivity", isCorrect: false },
                { answerText: "Education", isCorrect: false },
                { answerText: "Socilizing", isCorrect: true },
            ],
        },
        {
            questionText: "New York in what country?",
            options: [
                { answerText: "Japan", isCorrect: false },
                { answerText: "France", isCorrect: false },
                { answerText: "U.S", isCorrect: true },
                { answerText: "Brazil", isCorrect: false },
            ],
        },
    ];
    const [current, setCurrent] = useState(0);

    let interval = useRef();
    // answer correct: score + 1, incorrect: + 0
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            score = score + 1;
            console.log(score);
        }
        const nextQuestion = current + 1;
        if (nextQuestion < questions.length) {
            setCurrent(nextQuestion);
        } else {
            // alert("Congrats, you finished the quiz!");
            clearInterval(interval.current);

            scoreValue = (score / questions.length) * 100;
            setFinish(true);
            setTimeUp(false);
        }
    };
    // convert time into miliseconds
    const [countDownDate, setCountDownDate] = useState(0);
    const [now, setNow] = useState(0);
    const [hours, setHours] = useState();
    const [mins, setMins] = useState();
    const [secs, setSecs] = useState();
    const [timeUp, setTimeUp] = useState(false);
    const [finish, setFinish] = useState(false);
    const [start, setStart] = useState(false);
    const timer = () => {
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
            );
            const mins = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
            const secs = Math.floor((distance % (60 * 1000)) / 1000);
            // time is up: set the current score instantly
            if (distance < 0) {
                clearInterval(interval.current);
                setTimeUp(true);
                scoreValue = (score / questions.length) * 100;
            } else {
                // display the time when finishes the quiz in time
                setHours(hours);
                setMins(mins);
                setSecs(secs);
            }
        });
    };
    useEffect(() => {
        setNow(11 * 1000);

        if (start === true) {
            timer();
            return () => {
                if (interval.current) clearInterval(interval.current);
            };
        }
    });
    return (
        <div className="App">
            {start ? (
                <div>
                    {
                        <div>
                            {finish || timeUp ? (
                                <div className="scoreSection">
                                    {" "}
                                    Your score is {scoreValue}
                                    {scoreValue === 100 ? (
                                        <div>Congratulations!</div>
                                    ) : scoreValue < 50 ? (
                                        <div>Unfortunately, you didn't pass the quiz.</div>
                                    ) : (
                                        <div></div>
                                    )}
                                    <button
                                        className="homeButton"
                                        onClick={() => window.location.reload()}
                                    >
                                        Back
                                    </button>
                                </div>
                            ) : (
                                <SectionDisplay
                                    currentQuestion={current}
                                    questionAmount={questions}
                                    hour={hours}
                                    min={mins}
                                    sec={secs}
                                    handleClick={(isCorrect) =>
                                        handleAnswerButtonClick(isCorrect)
                                    }
                                />
                            )}
                        </div>
                    }
                </div>
            ) : (
                <div>
                    <div>
                        <p>
                            This test aim to test candidates' knowledge.{"\n"}
                            You have 10 seconds to finish the test.{"\n"}Your answer will be
                            automatcally saved when time is up.
                        </p>
                    </div>
                    <StartSection
                        handleStart={(start) => setStart(start)}
                        handleCountDownDate={(countDownDate) =>
                            setCountDownDate(countDownDate)
                        }
                        passedTime={now}
                    />
                </div>
            )}
            {/* button to start the quiz */}
        </div>
    );
}

export default App;
