const Queue = require('./queue');
const DLLQueue = require('./DLLqueue');
const queueHelpers = require('./queueHelpers');

function makeStarTrekQ() {
  const starTrekQ = new Queue();
  const chars = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'];
  chars.forEach(char => starTrekQ.enqueue(char));
  return starTrekQ;
}

function makeStarTrekDLLQ() {
  const starTrekQ = new DLLQueue();
  const chars = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'];
  chars.forEach(char => starTrekQ.enqueue(char));
  return starTrekQ;
}

const trek = makeStarTrekQ();
const trekDLL = makeStarTrekDLLQ();

// trek.dequeue();
// trek.dequeue();

// queueHelpers().displayAll(trek);
queueHelpers().displayAll(trekDLL);
