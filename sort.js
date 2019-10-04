const Stack = require('./stack');
const stackHelpers = require('./stackHelpers');
const display = stackHelpers().displayAll;

function sortStack(stack) {
  const tempStack = new Stack();
  let curr = stack.top;
  let temp = stack.pop();
  while (curr.next) {
    if (!tempStack.top) {
      tempStack.push(temp)
    } else if (temp > tempStack.top.data) {
      result.push(stack.pop());
    } else {
      
    }
    curr = curr.next;
  }
  while
  return stack;
}

function makeDisorder() {
  const stack = new Stack();
  const items = [1, 2, 10, 3, 5];
  items.forEach(item => stack.push(item));
  return stack;
}

const disorder = makeDisorder();
// display(disorder);
const sort = sortStack(disorder);
// display(sort);

/*

5      
3
10
2
1      null

*/
