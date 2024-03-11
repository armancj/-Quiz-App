import {useState} from "react";
import questions from "../questions.js";

export function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswers){
        setUserAnswers((prevState)=> {
            return [...prevState, selectedAnswers];
        })
    }

    return (
        <div id={"questions"}>
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id={"answers"}>
                {questions[activeQuestionIndex].answers.map((answer, index) => (
                    <li key={index} className={"answer"}>
                        <button onClick={()=>handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}