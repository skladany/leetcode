## 0897. Increasing Order Search Tree

### Notes:

For an `easy` problem -- took my _way_ too long. Initially tried a recursive DFS, but that was giving the wrong ordering, so I tried iteratively and found things getting too complicated. Finally had to look up IOT and realized it's so dead simple with recursion -- the order of execution is crucial.

Then I strugled with an off-by-one error. I ended up with an empty node at the end of the tree. Eventually setting on returning the `inOrderNode.right` -- e.g., returning the 1st index instead of 0th, which felt like a hack.

...but that's hot leetcode did it, so I guess that's fine!

https://leetcode.com/problems/increasing-order-search-tree

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

Example 1:

Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

Example 2:

Input: root = [5,1,7]
Output: [1,null,5,null,7]

Constraints:

    The number of nodes in the given tree will be in the range [1, 100].
    0 <= Node.val <= 1000
