'use strict';

const Stack = require('./stack');

function stackHelpers() {

    const peek = (stack) => {
        //no stack
        if(!stack) {
            return 'Please provide a valid stack.';
        }

        return stack.top.data;
    };

    const isEmpty = (stack) => {
        //No stack
        if(!stack) {
            return 'Please provice a valid stack.';
        }
        
        return (stack.top === null);
    };

    const displayAll = (stack) => {
        let curr = stack.top;
        while (curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    };

    return {
        peek,
        isEmpty,
        displayAll,
    };
}

module.exports = stackHelpers;
