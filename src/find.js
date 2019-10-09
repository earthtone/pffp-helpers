import curry from '@earthtone/tiny-curry'
import { isObject } from '@earthtone/tiny-predicates'
import { fromPairs, toPairs } from './pairs'
/**
 * Point free find
 * Supports both Arrays and Objects
 *
 * @func
 * @curried
 * @param {Function} pred - function that returns a boolean
 * @param {Array|Object} data - data to find value in
 * @return {*} value that matches predicate
 * */
export const find = curry((pred, data) => isObject(data)
  ? fromPairs(toPairs(data).find(([, v]) => pred(v)))
  : data.find(pred)
)
