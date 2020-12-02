## 0104. Maximum Depth of Binary Tree

### Notes:

This one was pretty easy. I immediately thought "Depth first search" when I saw this problem.

Normally I'd solve this iteratively -- but that's a lot of extra code for no real performance gain
(since the iterative solution basically replicates a call stack)

So, quick recursive function + keeping track of the max.

Tail Recursion seems to be the best solution according to leetcode.

---

https://leetcode.com/problems/maximum-depth-of-binary-tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

Example 3:

Input: root = []
Output: 0

Example 4:

Input: root = [0]
Output: 1

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
