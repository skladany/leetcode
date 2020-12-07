## 0059. Spiral Matrix II

Took me a while, but I got there. Spiral matrix has always given me trouble, but what makes this problem
much much easier is using state machines. Rather than having a slew of if/then checks, rely on a simple
array for both the row and col to determine the next direction to go.

I did have some trouble with bounds checking -- which I fould much easier to understand and deal with
once I extracted that to a seperate function.

Defintely not the prettiest solution, but it is pretty clear I think.

---

https://leetcode.com/problems/spiral-matrix-ii

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:

Input: n = 1
Output: [[1]]

Constraints:

    1 <= n <= 20
