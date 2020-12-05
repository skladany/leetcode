'use strict';

module.exports = { canPlaceFlowers };

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 *
 * O(n) time | O(1) space
 */
function canPlaceFlowers(flowerbed, n) {
  if (0 === n) return true;

  let empty = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (canPlant(flowerbed, i)) {
      empty++;

      // Mark as used
      flowerbed[i] = 1;
    }

    if (empty === n) {
      return true;
    }
  }

  return false;

  function canPlant(flowerbed, i) {
    // Check if left is in range
    if (i - 1 >= 0) {
      // Check if empty
      if (flowerbed[i - 1] !== 0) return false;
    }

    // Check i
    if (flowerbed[i] !== 0) return false;

    // Check right
    if (i + 1 < flowerbed.length) {
      // Check if empty
      if (flowerbed[i + 1] !== 0) return false;
    }

    return true;
  }
}
