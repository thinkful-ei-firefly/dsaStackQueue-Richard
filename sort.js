'use strict';

const Stack = require('./stack');
const stackHelpers = require('./stackHelpers');

//input stack to be sorted smallest on top
//temp stack to be sorted largest on top
function sortStack(stackA) {
    const tempStack = new Stack();
    let temp = stackA.pop();
    let curr = stackA.top;
    while(curr !== null) {
        
    return stackA;
}

function makeDisorder(items) {
    const stack = new Stack();
    items.forEach(item => stack.push(item));
    return stack;
}

const items = [1, 2, 10, 11, 3, 5];
const disorder = makeDisorder(items);
stackHelpers.display(disorder);
stackHelpers.display(sortStack(disorder));

/*
    max   min
    11  
A               B

                
                
                5
                3
                2
10                1




null
while curr !== null
//check Max against currA
//if currA is smaller           //if currA is larger          
//check currA against currB     //Max push to B
                                //currA pop to Max

//if currA smaller              //if currA is larger           
//currA in a Min                //pop currA push to B

//if Min < currB
//pop currB push to A
//repeat until //min > currB

//go backwards until currA > currB
//go forwards again


*/
