import React from 'react';

const QUESTION_DATA_2 = [
    {
        question: <span>if you are in third place and you pass the guy in second place, what place are you in now?</span>,
        answers: [
            <span>They're the same thing.</span>,
            <span>Repaints (or redraws) occur when elements change their visual styles but not layout.</span>,
            <span>Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.</span>,
            <span>The previous two answers are correct.</span>
        ],
        correct: 3
    },
    {
        question: <span>you have two dogs and three cats, two cats run away, and one dog dies. how many animals are gone?</span>,
        answers: [
            <span>Parse Errors, Syntax Errors and Runtime Errors.</span>,
            <span>Loading Errors, Runtime Errors and Logic Errors.</span>,
            <span>Syntax Errors, Logic Errors and Loading Errors.</span>,
            <span>Bad Errors, Very Bad Errors, and Fatal Errors.</span>
        ],
        correct: 1
    },
    {
        question: <span>if you could chose between two different guys you would pick</span>,
        answers: [
            <span>An inner function that has access to an outer function's variables, even after the outer function has executed.</span>,
            <span>A stateful function; a function that preserves state.</span>,
            <span>The combination of a function and the lexical environment within which that function was declared.</span>,
            <span>All of the above.</span>
        ],
        correct: 3
    },
    {
        question: <span>the twilight saga has a main character and two side characters. true or false.</span>,
        answers: [
            <span>When currying or implementing partial application.</span>,
            <span>To emulate private methods.</span>,
            <span>In event handlers, timers, and asynchronous callbacks.</span>,
            <span>All of the above.</span>
        ],
        correct: 3
    },
    {
        question: <span>buffy is a vampire. true or false.</span>,
        answers: [
            <span>You can use <code>call</code> or <code>apply</code> to borrow methods from other objects.</span>,
            <span>You can use <code>bind</code> for partial function application.</span>,
            <span>If you're using the <code>map</code> method to run a function on an array and you need to preserve the <code>this</code> context, you can use <code>bind</code>.</span>,
            <span>All of the above.</span>
        ],
        correct: 3
    }
];

export default QUESTION_DATA_2;
