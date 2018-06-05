function every(collection, predicate) {
  for (var i = 0; i < collection.length; i++) {
    if (!predicate(collection[i])) {
      return false
    }
  }
  return true
}

var users = [
  { name: 'barney', age: 36, isActive: true },
  { name: 'fred', age: 40, isActive: false }
]

console.log (every(users, function (user) {
  return user.age >= 36
}) )
// => true

function some(collection, predicate) {
  for (var i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return true
    }
  }
  return false
}

var users = [
  { name: 'barney', age: 36, isActive: true },
  { name: 'fred', age: 40, isActive: false },
  { name: 'pebbles', age: 1, isActive: true }
]

console.log( some(users, function (user) {
  return user.age >= 50
}) )
// => false

function find(collection, predicate) {
  for (var i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i]
    }
  }
}

var users = [
  { name: 'barney', age: 36, isActive: false },
  { name: 'fred', age: 40, isActive: true },
  { name: 'pebbles', age: 1, isActive: true }
]

console.log( find(users, function (user) {
  return user.age < 40 && user.isActive
}) )
// => { name: 'pebbles', age: 1, isActive: true }

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i
    }
  }
}

var numbers = [4, 8, 8, 10]

console.log( indexOf(numbers, 8) )
// => 1

function takeWhile(array, predicate) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i])
    } else {
      return result
    }
  }
  return result
}

var users = [
  { name: 'barney', age: 36, isActive: true },
  { name: 'dino', age: 4, isActive: true },
  { name: 'fred', age: 40, isActive: false },
  { name: 'pebbles', age: 1, isActive: true }
]

console.log( takeWhile(users, function (user) {
  return user.isActive
}) )
/**
 * [
 *   { name: 'barney', age: 36, isActive: true },
 *   { name: 'dino', age: 4, isActive: true }
 * ]
 */
