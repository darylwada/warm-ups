/* eslint-disable no-unused-vars */

var queryString = {
  parse(string) {
    if (string === '' || string === '?') return {}
    return string
      .slice(1)
      .split('&')
      .map(pair => pair.split('='))
      .reduce((parsed, pair) => Object.assign(parsed, { [pair[0]]: pair[1] }), {})
  },
  stringify(object) {
    var keys = Object.keys(object)
    if (!keys.length) return ''
    return '?' + keys
      .map(key => key + '=' + object[key])
      .join('&')
  }
}
