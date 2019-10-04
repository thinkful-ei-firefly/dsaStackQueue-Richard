const Stack = require('./stack');

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  let reverse = '';
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    reverse += stack.pop();
  }
  if (reverse === s) return true;
  return false;
}

// optimized:
// function is_palindrome(string) {
//   string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   if (string.length <= 1) return true;
//   const firstHalfEndIndex = Math.floor((string.length - 2) / 2);
//   const secondHalfStartIndex = Math.ceil(string.length / 2);

//   const charStack = new Stack();

//   for (let i = 0; i <= firstHalfEndIndex; i++) {
//     charStack.push(string[i]);
//   }

//   for (let i = secondHalfStartIndex; i < string.length; i++) {
//     if (string[i] !== charStack.pop()) return false;
//   }
//   return true;
// }

// True, true, true, false
console.log(is_palindrome('daad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
