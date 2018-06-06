function chunk(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size)
    chunks.push(chunk)
  }
  return chunks
}

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log( chunk(letters, 3) )
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

function flatten(array) {
  var flattened = []
  for (var i = 0; i < array.length; i++) {
    flattened = flattened.concat(array[i])
  }
  return flattened
}

var array = [1, [2, [3, [4]], 5]]

console.log( flatten(array) )
// => [1, 2, [3, [4]], 5]

function pick(object, keys) {
  var picked = {}
  for (var key in object) {
    if (keys.includes(key)) {
      picked[key] = object[key]
    }
  }
  return picked
}

var object = { a: 1, b: '2', c: 3 }

console.log( pick(object, ['a', 'c']) )
// => { a: 1, c: 3 }

function omit(object, keys) {
  var omitted = {}
  for (var key in object) {
    if (!keys.includes(key)) {
      omitted[key] = object[key]
    }
  }
  return omitted
}

var object = { a: 1, b: '2', c: 3 }

console.log( omit(object, ['a', 'c']) )
// => { b: '2' }

function partition(collection, predicate) {
  var predicateTrue = []
  var predicateFalse = []
  for (var i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      predicateTrue.push(collection[i])
    }
    else {
      predicateFalse.push(collection[i])
    }
  }
  return [predicateTrue, predicateFalse]
}

var users = [
  { name: 'barney', age: 36, isActive: false },
  { name: 'fred', age: 40, isActive: true },
  { name: 'pebbles', age: 1, isActive: false }
]

console.log( partition(users, function (user) {
  return user.isActive
}) )
/**
 * [
 *   [
 *     { name: 'fred', age: 40, isActive: true }
 *   ],
 *   [
 *     { name: 'barney', age: 36, isActive: false },
 *     { name: 'pebbles', age: 1, isActive: false }
 *   ]
 * ]
 */
