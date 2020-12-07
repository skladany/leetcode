'use strict';

const assert = require('assert');
const _ = require('lodash');

const { generateMatrix } = require('./');

describe('#generateMatrix', () => {
  const tests = [
    {
      n: 0,
      result: [],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(generateMatrix(n), result);
    });
  });
});
