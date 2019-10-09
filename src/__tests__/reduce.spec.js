import test from 'ava'
import { reduce } from '../reduce'

const add = (a, b) => a + b
const mult = (a, b) => a * b

test('folds simple functions over arrays with the supplied accumulator', assert => {
  assert.is(reduce(add, 0, [1, 2, 3, 4]), 10)
  assert.is(reduce(mult, 1, [1, 2, 3, 4]), 24)
})

test('returns the accumulator for an empty array', assert => {
  assert.is(reduce(add, 0, []), 0)
  assert.is(reduce(mult, 1, []), 1)
})
