'use strict';

module.exports = { kthFactor };

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * O(n) Space | O(1) Time
 */
function kthFactor(n, k) {
  var kthFactor = function(n, k) {
    let j = 1;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        if (j === k) return i;

        j++;
      }
    }

    return -1;
  };
}
