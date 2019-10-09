import curry from '@earthtone/tiny-curry'
import { isObject } from '@earthtone/tiny-predicates'
import { fromPairs, toPairs } from './pairs'

/**
 * Point free filter
 * Supports both Arrays and Objects
 *
 * @func
 * @curried
 * @param {Function} pred - function that returns a boolean
 * @param {Array|Object} data - data to filter
 * @return {Array|Object}
 * */
export const filter = curry((pred, data) => isObject(data)
  ? fromPairs(toPairs(data).filter(([, v]) => pred(v)))
  : data.filter(pred)
)
