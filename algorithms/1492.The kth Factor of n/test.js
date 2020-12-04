'use strict';

const assert = require('assert');
const _ = require('lodash');

const { kthFactor } = require('./');

describe('#kthFactor', () => {
  const tests = [
    {
      n: 12,
      k: 3,
      result: 3,
    },
    {
      n: 7,
      k: 2,
      result: 7,
    },
    {
      n: 4,
      k: 4,
      result: -1,
    },
    {
      n: 1,
      k: 1,
      result: 1,
    },
    {
      n: 1000,
      k: 3,
      result: 4,
    },
  ];

  _.forEach(tests, ({ n, k, result }) => {
    it(`${n}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kthFactor(n, k), result);
    });
  });
});
