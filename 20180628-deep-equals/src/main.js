function deepEquals(x, y) {
  if (!(x instanceof Object) && !(y instanceof Object)) return x === y
  if (x instanceof Object && y instanceof Object) return JSON.stringify(x) === JSON.stringify(y)
  return false
}
