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

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
