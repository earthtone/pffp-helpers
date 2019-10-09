import test from 'ava'
import { map } from '../map'

const times2 = x => x * 2
const dec = x => x - 1

test('maps simple functions over arrays', assert => {
  assert.deepEqual(map(times2, [1, 2, 3, 4]), [2, 4, 6, 8])
})

test('maps over objects', assert => {
  assert.deepEqual(map(dec, {}), {})
  assert.deepEqual(map(dec, { x: 4, y: 5, z: 6 }), { x: 3, y: 4, z: 5 })
})

test('composes', assert => {
  const mdouble = map(times2)
  const mdec = map(dec)
  assert.deepEqual(mdec(mdouble([10, 20, 30])), [19, 39, 59])
})
