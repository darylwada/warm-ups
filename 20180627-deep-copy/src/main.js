function deepCopy(input) {

  if (!(input instanceof Object)) {
    return input
  }

  if (input instanceof Date) {
    return new Date(input)
  }

  if (input instanceof Array) {

    if (input.every(element => element instanceof Date)) {
      return input.map(element => new Date(element))
    }

    if (input.every(element => element instanceof Object && !(element instanceof Array))) {
      const shallowCopy = input.map(element => Object.assign({}, element))
      const deepCopy = shallowCopy.map(element => {
        for (let key in element) {
          let value = element[key]
          if (value instanceof Date) {
            value = new Date(value)
            element[key] = value
            return element
          }
        }
        return element
      })
      return deepCopy
    }

    return [...input]
  }

  if (input instanceof Object) {
    return Object.assign({}, input)
  }

}
