/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 *
 * O(n) Time | O(1) Space
 */
var connect = function(root) {
  let level = root;
  let current = null;
  let temp = null;
  let last = null;

  while (level) {
    temp = new Node(0);
    last = temp;
    current = level;
    while (current) {
      if (current.left) {
        last.next = current.left;
        last = last.next;
      }

      if (current.right) {
        last.next = current.right;
        last = last.next;
      }

      current = current.next;
    }

    level = temp.next;
  }

  return root;
};
