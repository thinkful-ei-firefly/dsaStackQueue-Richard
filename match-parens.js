const Stack = require('./stack');

function checkParens(exp) {
  const stack = new Stack();
  const open = ['(', '{', '[', "'", '"'];
  const close = [')', '}', ']', "'", '"'];
  let expected = '';
  let location = 0;
  for (let i = 0; i < exp.length; i++) {
    if (open.includes(exp[i])) {
      stack.push(exp[i]);
      expected = close[open.indexOf(exp[i])];
      location = i;
    } else if (close.includes(exp[i]) && exp[i] === expected) {
      stack.pop();
    } else if (close.includes(exp[i])) {
      console.log(`Closing parens without an opening at character ${i}`);
      return false;
    }
  }
  if (stack.top === null) return true;
  else {
    console.log(`Opening parens without a closing at character ${location}`);
    return false;
  }
}

// const right = '[]';
const noOpener = 'stuf]f';
const noCloser = 'st[uff';
const nest = '{{{}}}';
const brackets = '([])';

// console.log(checkParens(right)); // true
// console.log(checkParens(wrong)); // false
console.log(checkParens(nest)); // true
// console.log(checkParens(brackets)); // true

// console.log(checkParens(noOpener));
// console.log(checkParens(noCloser));
