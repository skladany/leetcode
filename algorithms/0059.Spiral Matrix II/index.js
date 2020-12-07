'use strict';

module.exports = { generateMatrix };

/**
 * @param {number} n
 * @return {number[][]}
 *
 * O(n) Time, O(n) Space
 */
function generateMatrix(n) {
  let matrix = Array(n)
    .fill(0)
    .map(e => Array(n).fill(0));

  let i = 1;
  let c = 0;
  let r = 0;
  let dir_idx = 0;
  let turn = false;

  let dir_row = [0, 1, 0, -1];
  let dir_col = [1, 0, -1, 0];

  while (i <= n * n) {
    // Turn if we seen this cell before, or out of bounds
    if (outOfBounds()) {
      dir_idx = (dir_idx + 1) % 4;

      r += dir_row[dir_idx];
      c += dir_col[dir_idx];
    }

    // Set the cell
    matrix[r][c] = i;

    // Move to new cell
    r += dir_row[dir_idx];
    c += dir_col[dir_idx];

    // Increment counter
    i++;
  }

  function outOfBounds() {
    if (c < 0) {
      c++;
      return true;
    }
    if (r < 0) {
      r++;
      return true;
    }
    if (c > n - 1) {
      c--;
      return true;
    }
    if (r > n - 1) {
      r--;
      return true;
    }

    if (matrix[r][c] > 0) {
      r -= dir_row[dir_idx];
      c -= dir_col[dir_idx];
      return true;
    }

    return false;
  }

  return matrix;
}
