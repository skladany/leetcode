'use strict';

module.exports = { maxDepth };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 *
 * Complexity: O(E + V) or O(n)
 * Space: O(n)
 */
function maxDepth(root) {
  let max = 0;
  let currDepth = 0;

  function dfs(node, currDepth) {
    if (!node) {
      return;
    }

    currDepth++;
    max = Math.max(currDepth, max);

    dfs(node.left, currDepth);
    dfs(node.right, currDepth);
  }

  dfs(root, 0);

  return max;
}
