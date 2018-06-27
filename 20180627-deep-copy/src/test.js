const { expect } = chai

describe('deepCopy(input)', () => {

  context('when the input is a String', () => {

    it('copies the String', () => {
      const input = 'foo'
      const output = deepCopy(input)
      expect(output)
        .to.be.a('string')
        .that.equals(input)
    })

  })

  context('when the input is a Number', () => {

    it('copies the Number', () => {
      const input = 1
      const output = deepCopy(input)
      expect(output)
        .to.be.a('number')
        .that.equals(input)
    })

  })

  context('when the input is a Boolean', () => {

    it('copies the Boolean', () => {
      const input = false
      const output = deepCopy(input)
      expect(output)
        .to.be.a('boolean')
        .that.equals(input)
    })

  })

  context('when the input is null', () => {

    it('returns null', () => {
      const input = null
      const output = deepCopy(input)
      expect(output).to.equal(null)
    })

  })

  context('when the input is a Date', () => {

    it('copies the Date', () => {
      const input = freeze(new Date())
      const output = deepCopy(input)
      expect(output)
        .to.be.a('date')
        .that.does.not.equal(input)
      expect(output.toJSON()).to.equal(input.toJSON())
    })

  })

  context('when the input is an empty Array', () => {

    it('copies the Array', () => {
      const input = freeze([])
      const output = deepCopy(input)
      expect(output).to.deep.equal(input)
      expect(output).not.equal(input)
    })

  })

  context('when the target is an Array of primitives', () => {

    it('copies the Array', () => {
      const input = freeze(['foo', 0, false, null])
      const output = deepCopy(input)
      expect(output).to.deep.equal(input)
      expect(output).not.to.equal(input)
    })

  })

  context('when the target is an Array of Dates', () => {

    it('copies the Array', () => {
      const input = freeze([new Date(1), new Date(2), new Date(3)])
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.have.lengthOf(input.length)
      output.forEach((date, index) => {
        expect(date).not.to.equal(input[index])
        expect(date.toJSON()).to.equal(input[index].toJSON())
      })
    })

  })

  context('when the target is an Array of Arrays', () => {

    it('copies the Array', () => {
      const input = freeze([
        ['foo', 0, false, null],
        [0, 'foo', false, null],
        [0, false, 'foo', null],
        [0, false, null, 'foo']
      ])
      const output = deepCopy(input)
      expect(output).to.deep.equal(input)
      expect(output).not.to.equal(input)
    })

  })

  context('when the target is an empty Object', () => {

    it('copies the Object', () => {
      const input = freeze({})
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.deep.equal(input)
    })

  })

  context('when the target is an Object containing primitives', () => {

    it('copies the Object', () => {
      const input = freeze({
        foo: 'foo',
        bar: 0,
        baz: false,
        qux: null
      })
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.deep.equal(input)
    })

  })

  context('when the target is an Object containing a Date', () => {

    it('copies the Object', () => {
      const input = freeze({
        message: 'Hello, World!',
        receivedOn: new Date(1)
      })
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output)
        .to.have.property('message')
        .that.equals(input.message)
      expect(output.receivedOn.toJSON()).to.equal(input.receivedOn.toJSON())
    })

  })

  context('when the target is an Object containing an Array', () => {

    it('copies the Object', () => {
      const input = freeze({
        foo: ['foo', 0, false, null]
      })
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.deep.equal(input)
    })

  })

  context('when the target is an Object containing an Object', () => {

    it('copies the Object', () => {
      const input = freeze({
        foo: {
          foo: 'foo',
          bar: 0,
          baz: false,
          qux: null
        }
      })
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.deep.equal(input)
    })

  })

  context('when the target is an Array of Objects', () => {

    it('copies the Array', () => {
      const input = freeze([
        { foo: 'foo' },
        { bar: 0 },
        { baz: false },
        { qux: null },
        { quux: ['foo', 0, false, null] },
        { corge: new Date(0) }
      ])
      const output = deepCopy(input)
      expect(output).not.to.equal(input)
      expect(output).to.deep.equal(input)
      expect(output[5].corge).not.to.equal(input[5].corge)
      expect(output[5].corge.toJSON()).to.equal(input[5].corge.toJSON())
    })

  })

})

function isObject(input) {
  return typeof input === 'object'
}

function isFunction(input) {
  return typeof input === 'function'
}

function isNull(input) {
  return input === null
}

function freeze(input) {
  Object.freeze(input)
  Object.getOwnPropertyNames(input).forEach(function (property) {
    const value = input[property]
    if (!isNull(value) &&
        (isObject(value) || isFunction(value)) &&
        !Object.isFrozen(value)) {
      freeze(value)
    }
  })
  return input
}
