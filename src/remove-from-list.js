const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let length = getLength();

  function getLength() {
    let count = 1;
    while (current.next) {
      console.log(current.next);
      current = current.next;
      count++;
    }
    return count;
  }

  let theIdex = getIndex(k);
  function getIndex(val) {
    let index = 0;
    let current = l;
    while (index < length) {
      if (val === current.value) {
        return index;
      }
      current = current.next;
      index++;
    }
  }
  function removeAt(position) {
    console.log(position)

    if (position === 0) {
      l = l.next;
      length--;
      return l;
    } else {
      let prev = null;
      let current = l;
      let index = 0;
      while(index < position){
        prev = l;
        current = l.next;
        index++;
      }

      prev.next = current.next;
      length--
      return l;
    }


  }

  return removeAt(theIdex);
}


module.exports = {
  removeKFromList
};
