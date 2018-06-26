export function parse(query) {
  return query
    .replace(/^\?/, '')
    .split('&')
    .map(pair => pair.split('='))
    .reduce((params, [ key, value ]) => {
      return Object.assign(params, { [key]: value })
    }, {})
}

export function stringify(params) {
  var keys = Object.keys(params)
  if (!keys.length) return ''
  return '?' + keys
    .map(key => `${key}=${params[key]}`)
    .join('&')
}
