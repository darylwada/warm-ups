function padLeft(string, padding, maxLength) {
  var fullPadding = ''
  var i = 0
  while (i < maxLength - string.length) {
    for (var j = 0; j < padding.length; j++) {
      if (i < maxLength - string.length) {
        fullPadding += padding[j]
        i++
      }
    }
  }
  return fullPadding + string
}

console.log( padLeft('abc', '-', 6) )
// => '---abc'

console.log( padLeft('abc', '-_', 8) )
// => '-_-_-abc'

console.log( padLeft('abc', '-', 3) )
// => 'abc'

function padRight(string, padding, maxLength) {
  var fullPadding = ''
  var i = 0
  while (i < maxLength - string.length) {
    for (var j = 0; j < padding.length; j++) {
      if (i < maxLength - string.length) {
        fullPadding += padding[j]
        i++
      }
    }
  }
  return string + fullPadding
}

console.log( padRight('abc', '-', 6) )
// => 'abc---'

console.log( padRight('abc', '-_', 8) )
// => 'abc-_-_-'

console.log( padRight('abc', '-', 3) )
// => 'abc'
