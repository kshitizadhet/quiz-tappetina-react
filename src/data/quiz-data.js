import React from 'react';

const QUESTION_DATA = [
    {
        question: <span>What was the foundation of Ada Lovelace and Charles Babbage's friendship?</span>,
        answers: [
            <span>Their love for machines.</span>,
            <span>Their interest in mathematics.</span>,
            <span>Babbage's ideas on the Difference Engine.</span>,
            <span>Ada's ideas of programming concepts.</span>
        ],
        correct: 0
    },
    {
        question: <span>Ada's best work includes:</span>,
        answers: [
            <span>Lovelace's Algorithm.</span>,
            <span>Her notes on the Analytical Engine.</span>,
            <span>Introduction of Computer Science concepts like Loops and Bugs.</span>,
            <span>All of the above.</span>
        ],
        correct: 3
    },
    {
        question: <span>What is the main purpose of loops in Computer Science?</span>,
        answers: [
            <span>To perform a task without user instructions.</span>,
            <span>To run a command multiple times until a condition is met.</span>,
            <span>To compile a program and generate output.</span>,
            <span>To compare various statements in a program.</span>
        ],
        correct: 1
    },
    {
        question: <span>How many types of loops do we discuss in the video?</span>,
        answers: [
            <span>2</span>,
            <span>3</span>,
            <span>1</span>,
            <span>None</span>
        ],
        correct: 0
    },
    {
        question: <span>How many times a 'for' loop has to run to count from 1 to 25?</span>,
        answers: [
            <span>1 time</span>,
            <span>10 times</span>,
            <span>24 times</span>,
            <span>25 times</span>
        ],
        correct: 3
    },
    {
        question: <span>A 'while' loop terminates when the given condition becomes:</span>,
        answers: [
            <span>True</span>,
            <span>False</span>,
            <span>Equal to the pre-condition</span>,
            <span>None of the above</span>
        ],
        correct: 1
    },
    {
        question: <span>How many times can a 'while' loop run?</span>,
        answers: [
            <span>Never</span>,
            <span>A few times</span>,
            <span>Forever</span>,
            <span>All of the above</span>
        ],
        correct: 3
    }
];

export default QUESTION_DATA;
