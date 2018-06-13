function padLeft(string, padding, maxLength) {
  var targetPaddingLength = maxLength - string.length
  var repeatTimes = Math.ceil((maxLength - string.length) / padding.length)
  var fullPadding = padding.repeat(repeatTimes).slice(0, targetPaddingLength)
  return fullPadding + string
}

console.log( padLeft('abc', '-', 6) )
// => '---abc'

console.log( padLeft('abc', '-_', 8) )
// => '-_-_-abc'

console.log( padLeft('abc', '-', 3) )
// => 'abc'

function padRight(string, padding, maxLength) {
  var targetPaddingLength = maxLength - string.length
  var repeatTimes = Math.ceil((maxLength - string.length) / padding.length)
  var fullPadding = padding.repeat(repeatTimes).slice(0, targetPaddingLength)
  return string + fullPadding
}

console.log( padRight('abc', '-', 6) )
// => 'abc---'

console.log( padRight('abc', '-_', 8) )
// => 'abc-_-_-'

console.log( padRight('abc', '-', 3) )
// => 'abc'
