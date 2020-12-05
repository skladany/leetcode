## 0605. Can Place Flowers

That was just plain easy. I think leet was trying to tick you into thinking this was a DP problem, but it was cleary a one-pass solution with some extra checks on the start and end of the array.

My solution is a bit verbose, but I found it easier and more clear to break up into functions.

---

https://leetcode.com/problems/can-place-flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Constraints:

    1 <= flowerbed.length <= 2 * 104
    flowerbed[i] is 0 or 1.
    There are no two adjacent flowers in flowerbed.
    0 <= n <= flowerbed.length
