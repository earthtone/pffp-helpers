import curry from '@earthtone/tiny-curry'
import { isObject } from '@earthtone/tiny-predicates'
import { fromPairs, toPairs } from './pairs'

/**
 * Point free map
 * Supports both Arrays and Objects
 *
 * @func
 * @curried
 * @param {Function} fn - mapper function
 * @param {Array|Object} data - data to map over
 * @return {Array|Object}
 * */
export const map = curry((fn, data) => isObject(data)
  ? fromPairs(toPairs(data).map(([k, v]) => [k, fn(v)]))
  : data.map(fn)
)
