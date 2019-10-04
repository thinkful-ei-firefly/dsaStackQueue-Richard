function queueHelpers() {
  const peek = queue => {
    //no queue
    if (!queue) {
      return 'Please provide a valid queue.';
    }

    return queue.first.value;
  };

  const isEmpty = queue => {
    //No queue
    if (!queue) {
      return 'Please provice a valid queue.';
    }

    return queue.first === null;
  };

  const displayAll = queue => {
    let curr = queue.first;
    while (curr !== null) {
      console.log(curr.value);
      curr = curr.next;
    }
  };

  return {
    peek,
    isEmpty,
    displayAll
  };
}

module.exports = queueHelpers;
