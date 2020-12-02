/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.node = head;
};

/**
 * Returns a random list's length.
 * @return {number}
 */
Solution.prototype.getLength = function() {
  let node = this.node;
  let length = 0;

  while (node) {
    node = node.next;
    length++;
  }

  return length;
};

/**
 * Returns a random node's value.
 * Complexity: O(n) (two pass)
 * Space: O(1)
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let node = this.node;
  let steps = Math.floor(Math.random() * this.getLength());

  for (let i = 0; i < steps; i++) {
    node = node.next;
  }

  return node.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
