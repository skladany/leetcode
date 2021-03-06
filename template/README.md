# Leetcode Problems

Working though the December 2020 Leetcode challenge.

Problem solutions are mine -- but the excellent build system is borrowed from [@suguru03](https://github.com/suguru03/leetcode)

## Create a new problem

```
$ gulp init
prompt: num: <number>
```

It will generate a folder and files automatically.

## Benchmark

```
$ npm run benchmark
$ node benchmark
$ node benchmark -t Roman
```

## Test

```
$ npm test
$ mocha test
$ mocha test -t Roman
```

## Test Java using mocha

```
$ mocha test -t '001.Two Sum' --java
```

## Test Ruby using mocha

```
$ mocha test -t '001.Two Sum' --ruby
```
