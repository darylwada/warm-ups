function indexOf(str, substr) {
  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, i + substr.length) === substr) {
      return i
    }
  }
  return -1
}

console.log( indexOf('abc', 'b') )
// => 1

console.log( indexOf('abc', 'd') )
// => -1

console.log( indexOf('abcd', 'cd') )
// => 2

console.log( indexOf('abcdbd', 'bd') )
// => 4

console.log( indexOf('abc', '') )
// => 0
