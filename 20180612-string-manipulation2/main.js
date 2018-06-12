function startsWith(str, substr) {
  return str.substring(0, substr.length) === substr
}

console.log( startsWith('abcdef', 'ab') )
// => true

console.log( startsWith('abcdef', 'abd') )
// => false

console.log( startsWith('abcdef', 'bcd') )
// => false

console.log( startsWith(' abc', 'a') )
// => false

console.log( startsWith('', '') )
// => true

console.log( startsWith('abc', '') )
// => true

function endsWith(str, substr) {
  return str.substring(str.length - substr.length) === substr
}

console.log('endsWith results')

console.log( endsWith('abcdef', 'ef') )
// => true

console.log( endsWith('abcdef', 'cef') )
// => false

console.log( endsWith('abcdef', 'cde') )
// => false

console.log( endsWith('abc ', 'c') )
// => false

console.log( endsWith('', '') )
// => true

console.log( endsWith('abc', '') )
// => true
