function firstChar(string) {
  return string[0]
}

console.log( firstChar('foo') )
// => 'f'

console.log( firstChar('corge') )
// => 'c'

console.log( firstChar('zyzzy') )
// => 'z'

function lastChar(string) {
  return string[string.length - 1]
}

console.log( lastChar('foo') )
// => 'o'

console.log( lastChar('corge') )
// => 'e'

console.log( lastChar('zyzzy') )
// => 'y'

function repeat(string, number) {
  var repeated = ''
  for (var i = 0; i < number; i++) {
    repeated += string
  }
  return repeated
}

console.log( repeat('a', 3) )
// => 'aaa'

console.log( repeat('xyz', 2) )
// => 'xyzxyz'

console.log( repeat('quux', 0) )
// => ''

console.log( repeat('garply', -5) )
// => ''

function ransomCase(string) {
  var ransom = ''
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toUpperCase()
    }
    else {
      ransom += string[i].toLowerCase()
    }
  }
  return ransom
}

console.log( ransomCase('all code all day') )
// => 'AlL CoDe aLl dAy'

console.log( ransomCase('i love code') )
// => 'I LoVe cOdE'

function reverse(string) {
  var reversed = ''
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return reversed
}

console.log( reverse('foo') )
// => 'oof'

console.log( reverse('grault') )
// => 'tluarg'

function capitalize(string) {
  if (string.length < 1) {
    return ''
  }
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

console.log( capitalize('foo') )
// => 'Foo'

console.log( capitalize('GRAULT') )
// => 'Grault'

console.log( capitalize('') )
// => ''

console.log( capitalize('Anthony Bourdain') )
// => 'Anthony bourdain'
