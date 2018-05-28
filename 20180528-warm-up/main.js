function drop(list, count) {
  return list.slice(count)
}

var list = [1, 2, 3]
console.log(drop(list, 1))
// => [2, 3]

console.log(drop(list, 2))
// => [3]

console.log(drop(list, 5))
// => []

console.log(drop(list, 0))
// => [1, 2, 3]

console.log(list)
// => [1, 2, 3]
