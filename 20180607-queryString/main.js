var queryString = {
  parse: function(str) {
    if (str[0] !== '?') {
      return {}
    }

    var parsed = {}
    var component = ''
    var previousKey = ''
    var isKey = true

    for (var i = 1; i < str.length; i++) {
      if (str[i] === '=') {
        previousKey = component
        parsed[component] = null
        component = ''
        isKey = false
        continue
      }
      if (str[i] === '&') {
        parsed[previousKey] = component
        component = ''
        isKey = true
        continue
      }

      component += str[i]

      if (i === str.length - 1) {
        parsed[previousKey] = component
      }
    }
    return parsed
  },

  stringify: function(obj) {
    var keys = Object.keys(obj)
    if (keys.length === 0) {
      return ''
    }

    var stringified = '?'
    var lastKey = keys[keys.length - 1]
    for (var key in obj) {
      stringified += key + '=' + obj[key]
      if (key !== lastKey) {
        stringified += '&'
      }
    }
    return stringified
  }
}

console.log( queryString.parse('?view=catalog') )
// => { view: 'catalog' }

console.log( queryString.parse('?view=details&itemId=3') )
// => { view: 'details', itemId: '3' }

console.log( queryString.parse('?') )
// => {}

console.log( queryString.parse('') )
// => {}

console.log( queryString.stringify({ view: 'catalog' }) )
// => '?view=catalog'

console.log( queryString.stringify({ view: 'details', itemId: '3' }) )
// => '?view=details&itemId=3'

console.log( queryString.stringify({}) )
// => ''
