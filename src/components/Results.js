import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, nextQuiz, restartQuiz, flag }) => {
    const triesTotal = tally(userAnswers);
    const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
    const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
    const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try. So you do not get points.</div>;
    const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try. So you do not get points.</div>;

    function checkFlag() {
        if (flag===1){
            document.getElementById('nextQuizBtn').style.display = 'none';
        }
        else {
            nextQuiz();
        }
    }

    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            <div>You answered...</div>
            {oneTry}
            {twoTries}
            {threeTries}
            {fourTries}
            <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
            <a onClick={checkFlag} id="nextQuizBtn">Next Quiz</a>
            <a onClick={restartQuiz}>Restart Quiz</a>
        </div>
    );
}

Results.propTypes = {
    userAnswers: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    nextQuiz: PropTypes.func.isRequired,
    restartQuiz: PropTypes.func.isRequired,
    flag: PropTypes.number.isRequired
};

export default Results;
