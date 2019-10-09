import test from 'ava'
import { find } from '../find'

var obj1 = { x: 100 }
var obj2 = { x: 200 }
var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
var even = function (x) { return x % 2 === 0 }
var gt100 = function (x) { return x > 100 }
var isStr = function (x) { return typeof x === 'string' }
var xGt100 = function (o) { return o && o.x > 100 }

test('returns the first element that satisfies the predicate', assert => {
  assert.is(find(even, a), 10)
  assert.is(find(gt100, a), 200)
  assert.is(find(isStr, a), 'cow')
  assert.is(find(xGt100, a), obj2)
})

test('returns `undefined` when no element satisfies the predicate', assert => {
  assert.is(find(even, ['zing']), undefined)
})

test('returns `undefined` when given an empty list', assert => {
  assert.is(find(even, []), undefined)
})
