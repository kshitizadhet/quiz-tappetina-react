import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import Avatars from "./UserAvatar";
import VideoOne from "./YoutubeVideo";

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }) => {
    return (
        <div className="wrapper">
            <header>
                <div className="question-count">
                    <h2>Question</h2>
                    <div className="question-number">{step}</div>
                    <div className="description">of <span>{totalQuestions}</span></div>
                </div>
                <h1>Quiz Tappetina</h1>
                <div className="score-container">
                    <h2>Score</h2>
                    <div className="score">{score}</div>
                    <div className="description">points</div>
                </div>
                <div className="user-avatar">
                    <Avatars/>
                </div>
            </header>

            <div className="videos">
                <VideoOne/>
            </div>

            <div className="questions">
                <QuestionList
                    questions={questions}
                    handleAnswerClick={handleAnswerClick}
                    handleEnterPress={handleEnterPress}
                />
            </div>
        </div>
    );
}

Quiz.propTypes = {
    step: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
