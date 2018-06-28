function deepCopy(input) {

  if (!(input instanceof Object)) {
    return input
  }

  if (input instanceof Date) {
    return new Date(input)
  }

  if (input instanceof Array) {
    return input.map(element => deepCopy(element))
  }

  if (input instanceof Object) {
    const copy = {}
    for (let key in input) {
      copy[key] = deepCopy(input[key])
    }
    return copy
  }

}
