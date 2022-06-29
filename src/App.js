import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import QuestionOne from './QuestionOne/QuestionOne';
import QuestionTwo from './QuestionTwo/QuestionTwo'

function App() {
    const [ currentQuestion, setCurrentQuestion ] = useState("Question1")
    return (
        <div className="App">
            <header>
                <button
                    className="btn btn-green"
                    onClick={() => setCurrentQuestion("Question1")}
                >
                    Question 1
                </button>
                <button
                    className="btn btn-gold"
                    onClick={() => setCurrentQuestion("Question2")}
                >
                    Question 2
                </button>
                <button
                    className="btn btn-purple"
                    onClick={() => setCurrentQuestion("Question3")}
                >
                    Question 3
                </button>
            </header>
            {currentQuestion === "Question1" ? <QuestionOne /> : <></>}
            {currentQuestion === "Question2" ? <QuestionTwo /> : <></>}
        </div>
    );
}

export default App;
