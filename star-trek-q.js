const Queue = require('./queue');
const queueHelpers = require('./queueHelpers');

function makeStarTrekQ() {
  const starTrekQ = new Queue();
  const chars = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'];
  chars.forEach(char => starTrekQ.enqueue(char));
  return starTrekQ;
}

const trek = makeStarTrekQ();

trek.dequeue();
trek.dequeue();

queueHelpers().displayAll(trek);
