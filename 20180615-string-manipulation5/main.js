function includes(str, substr) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + substr.length) === substr) {
      return true
    }
  }
  return false
}

console.log( includes('abc', 'b') )
// => true

console.log( includes('abc', 'd') )
// => false

console.log( includes('abcd', 'bc') )
// => true

console.log( includes('abcd', 'bd') )
// => false

console.log( includes('abc', '') )
// => true
