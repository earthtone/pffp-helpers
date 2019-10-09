import curry from '@earthtone/tiny-curry'

/**
 * Return object entries as [key, value] pairs
 * Point free object entries
 *
 * @func
 * @curried
 * @param {Object} obj
 * @return {Array<Array<*>>}
 * */
export const toPairs = curry(obj => Object.entries(obj))

/**
 * Return an object literal from [key, value] entry pairs
 *
 * @func
 * @curried
 * @param {Array<Array<*>>} pairs
 * @return {Object}
 * */
export const fromPairs = curry(pairs => pairs.reduce((a, [k, v]) => { a[k] = v; return a }, {}))
