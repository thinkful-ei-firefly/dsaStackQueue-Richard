const Stack = require('./stack');

function makeStarTrek() {
  const starTrek = new Stack();
  const inserts = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
  inserts.forEach(char => starTrek.push(char));
  return starTrek;
}

function display(stack) {
  let curr = stack.top;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

const trek = makeStarTrek();
display(trek);
