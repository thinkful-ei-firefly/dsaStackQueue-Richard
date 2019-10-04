'use strict';

const Stack = require('./stack');

const stackHelpers=require('./stackHelpers');

function makeStarTrek() {
  const starTrek = new Stack();
  const inserts = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
  inserts.forEach(char => starTrek.push(char));
  return starTrek;
}

const trek = makeStarTrek();

trek.pop();
trek.pop();

stackHelpers().displayAll(trek);
