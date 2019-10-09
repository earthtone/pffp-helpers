import curry from '@earthtone/tiny-curry'

/**
 * Point free reduce
 *
 * @func
 * @curried
 * @param {Function} fn
 * @param {*} initial - initial value of expected type (e.g. {}, [], 0, '', etc)
 * @param {Array} data - list to reduce
 * @return {*}
 * */
export const reduce = curry((fn, initial, data) => data.reduce(fn, initial))
