import test from 'ava'
import { fromPairs, toPairs } from '../pairs'

test('converts an object into an array of two-element [key, value] arrays', assert => {
  assert.deepEqual(toPairs({ a: 1, b: 2, c: 3 }), [['a', 1], ['b', 2], ['c', 3]])
})

test('combines an array of two-element arrays into an object', assert => {
  assert.deepEqual(fromPairs([['a', 1], ['b', 2], ['c', 3]]), { a: 1, b: 2, c: 3 })
})

test('gives later entries precedence over earlier ones', assert => {
  assert.deepEqual(fromPairs([['x', 1], ['x', 2]]), { x: 2 })
})
