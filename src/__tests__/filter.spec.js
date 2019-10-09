import test from 'ava'
import { filter } from '../filter'

const even = x => x % 2 === 0

test('reduces an array to those matching a filter', assert => {
  assert.deepEqual(filter(even, [1, 2, 3, 4, 5]), [2, 4])
})

test('returns an empty array if no element matches', assert => {
  assert.deepEqual(filter(x => x > 100, [1, 9, 99]), [])
})

test('returns an empty array if asked to filter an empty array', assert => {
  assert.deepEqual(filter(x => x > 100, []), [])
})

test('filters objects', assert => {
  const positive = x => x > 0

  assert.deepEqual(filter(positive, {}), {})
  assert.deepEqual(filter(positive, { x: 0, y: 0, z: 0 }), {})
  assert.deepEqual(filter(positive, { x: 1, y: 0, z: 0 }), { x: 1 })
  assert.deepEqual(filter(positive, { x: 1, y: 2, z: 0 }), { x: 1, y: 2 })
  assert.deepEqual(filter(positive, { x: 1, y: 2, z: 3 }), { x: 1, y: 2, z: 3 })
})
