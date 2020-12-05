'use strict';

const assert = require('assert');
const _ = require('lodash');

const { canPlaceFlowers } = require('./');

describe('#canPlaceFlowers', () => {
  const tests = [
    {
      flowerbed: [1, 0, 0, 0, 1],
      n: 1,
      result: true,
    },
    {
      flowerbed: [1, 0, 0, 0, 1],
      n: 2,
      result: false,
    },
  ];

  _.forEach(tests, ({ flowerbed, n, result }) => {
    it(`${flowerbed}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(canPlaceFlowers(flowerbed, n), result);
    });
  });
});
