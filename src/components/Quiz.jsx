import {useState} from "react";
import questions from "../questions.js";
import quiz from '../assets/quiz-complete.png';

export function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === questions.length;

    if(quizIsComplete){
        return (
            <div id={"summary"}>
                <img src={quiz} alt={"quiz"}/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=> Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswers) {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswers];
        });
    }

    return (
        <div id={"quiz"}>
            <div id={"questions"}>
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id={"answers"}>
                    {questions[activeQuestionIndex].answers.map((answer, index) => (
                        <li key={`${answer}`} className={"answer"}>
                            <button onClick={() => handleSelectAnswer(answer)} >
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}