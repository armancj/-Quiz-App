import logo from '../assets/quiz-logo.png';

export function Headers() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>
                <span>ReactQuiz</span>
            </h1>
            <p>
                Project create for curse of react.
            </p>
        </header>
    )
}