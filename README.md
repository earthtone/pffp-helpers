# Point-free Functional Programming Helpers

A collection of curried point-free implementations for common list operations.

---

## Usage

All functions take a function as the first argument, and data as its second. Since all functions are curried, you can provide arguments one at a time, and receive functions in return until all arguments are provided.

```js
import { map, filter } from '@earthtone/pffp-helpers'

const isString = s => typeof s === 'string'
const uppercase = s => s.toUpperCase()

const onlyStrings = filter(isString)
const uppercaseAll = map(uppercase)

const harmonia = {
  year: 1970,
  guitar: 'rother',
  keys: 'roedelius',
  rhythms: 'moebius'
}

console.log(uppercaseAll(onlyStrings(harmonia))) // -> { guitar: 'ROTHER', keys: 'ROEDELIUS', rhythms: 'MOEBIUS' }
```

`map`, `filter`, and `find` all operate on `Array`s internally, so all callback functions are passed only the **values** of an `Object`. If you have a more advanced application that requires your callback to be aware of an `Object`s keys, you can use reduce.

```js
import { isObject } from '@earthtone/tiny-predicates'
import { map, reduce } from '@earthtone/pffp-helpers'

const freeJazz = {
  year: 1961,
  alto: 'ornette coleman',
  pocket_trumpet: 'don cherry',
  bass_1: 'scott lafaro',
  drums_1: 'billy higgins',
  bass_clarinet: 'eric dolphy',
  trumpet: 'freddie hubbard',
  bass_2: 'charlie haden',
  drums_2: 'ed blackwell'
}

const onlyTrumpets = reduce((a, [key, val]) => {
  if (/trumpet/.test(key) && isObject(a)) {
    a[key] = val
    return a
  } else {
    return a
  }
}, {})

const getLastname = map(name => name.split(' ')[1])
console.log(getLastName(onlyTrumpets(freeJazz))) // -> { pocket_trumpet: 'cherry', trumpet: 'hubbard' }
```

## Functions

- `map`: point-free implementation of `Array.prototype.map` that works on `Array` and `Object` primitives
- `reduce`: point-free implementation of `Array.prototype.reduce` that works on `Array` and `Object` primitives
- `filter`: point-free implementation of `Array.prototype.filter` that works on `Array` and `Object` primitives
- `find`: point-free implementation of `Array.prototype.find` that works on `Array` and `Object` primitives
- `toPairs`: point-free implementation of `Object.entries` for turning `Object` primitives into iterables
- `fromPairs`: point-free function for transforming a 2D key/value `Array` into an `Object` primitive

