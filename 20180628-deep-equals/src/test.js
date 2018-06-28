const { expect } = chai

describe('deepEquals(x, y)', () => {

  context('when two values are equal', () => {

    it('returns true', () => {
      const object = {}
      const array = []
      const inputs = [
        ['foo', 'foo'],
        [0, 0],
        [false, false],
        [null, null],
        [object, object],
        [array, array]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two values are not equal', () => {

    it('returns false', () => {
      const object = {}
      const array = []
      const inputs = [
        [null, 'foo'],
        ['foo', false],
        [false, 0],
        [0, null],
        [object, 'foo'],
        [array, false]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

  context('when two Dates are deeply equal', () => {

    it('returns true', () => {
      const inputs = [
        [new Date(0), new Date(0)],
        [new Date(1), new Date(1)],
        [new Date(2), new Date(2)],
        [new Date(3), new Date(3)],
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two Dates are not deeply equal', () => {

    it('returns false', () => {
      const inputs = [
        [new Date(0), new Date(1)],
        [new Date(1), new Date(2)],
        [new Date(2), new Date(3)],
        [new Date(3), new Date(0)],
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

  context('when two flat Objects are deeply equal', () => {

    it('returns true', () => {
      const inputs = [
        [{}, {}],
        [{ foo: 'bar' }, { foo: 'bar' }],
        [{ baz: 'qux', quux: new Date(0) }, { baz: 'qux', quux: new Date(0) }]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two flat Objects are not deeply equal', () => {

    it('returns false', () => {
      const inputs = [
        [{}, { foo: 'bar' }],
        [{ foo: 'bar' }, { foo: 0 }],
        [{ baz: 'qux', quux: new Date(0) }, { quux: 'corge' }]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

  context('when two flat Arrays are deeply equal', () => {

    it('returns true', () => {
      const inputs = [
        [[1], [1]],
        [['foo', 0], ['foo', 0]],
        [[{}, false, 'foo', null], [{}, false, 'foo', null]],
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two flat Arrays are not deeply equal', () => {

    it('returns false', () => {
      const inputs = [
        [[1], [true]],
        [['foo', 'bar', 0], ['foo', 'bar', 1]],
        [['foo', 'bar', 0], ['foo', 'bar', 0, null]],
        [[false, {}, 'foo', null], [{}, 'foo', null]],
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

  context('when two nested Objects are deeply equal', () => {

    it('returns true', () => {
      const inputs = [
        [{ foo: { bar: { baz: 'qux' } } }, { foo: { bar: { baz: 'qux' } } }],
        [{ foo: 'bar', baz: { qux: 'quux' } }, { foo: 'bar', baz: { qux: 'quux' } }]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two nested Objects are not deeply equal', () => {

    it('returns false', () => {
      const inputs = [
        [{ foo: {} }, { foo: { bar: 'baz' } }],
        [{ foo: { bar: { baz: 'quxx' } } }, { foo: { bar: { baz: 'qux' } } }],
        [{ foo: 'bar', baz: { qux: 'quuz' } }, { foo: 'bar', baz: { qux: 'quux' } }]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

  context('when two nested Arrays are deeply equal', () => {

    it('returns true', () => {
      const inputs = [
        [[[[new Date(0)]]], [[[new Date(0)]]]],
        [[{ foo: [['bar']] }], [{ foo: [['bar']] }]]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(true)
      })
    })

  })

  context('when two nested Arrays are not deeply equal', () => {

    it('returns false', () => {
      const inputs = [
        [[[[new Date(0)]]], [[[[new Date(0)]]]]],
        [[{ foo: [[{ baz: 'qux' }]] }], [{ foo: [[{ baz: 'quz' }]] }]]
      ]
      inputs.forEach(([ x, y ]) => {
        expect(deepEquals(x, y)).to.equal(false)
      })
    })

  })

})
