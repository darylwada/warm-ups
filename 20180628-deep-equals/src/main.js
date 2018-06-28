function deepEquals(x, y) {

  if (!(x instanceof Object) && !(y instanceof Object)) return x === y

  if (x instanceof Date && y instanceof Date) return x.toJSON() === y.toJSON()

  if (Array.isArray(x) && Array.isArray(y)) {
    return x.length === y.length
      ? x.every((element, i) => deepEquals(element, y[i]))
      : false
  }

  if (x instanceof Object && y instanceof Object) {
    const xEntries = Object.entries(x)
    const yEntries = Object.entries(y)

    const keysEqual = xEntries.length === yEntries.length
      ? xEntries.every((pair, i) => pair[0] === yEntries[i][0])
      : false
    const valuesEqual = xEntries.every((pair, i) => deepEquals(pair[1], yEntries[i][1]))

    return keysEqual && valuesEqual
  }

  return false
}
