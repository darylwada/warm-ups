const { expect } = chai

describe('createCollection()', () => {

  it('returns a collection Object', () => {
    const collection = createCollection()
    expect(collection).to.be.an('object')
  })

  it('returns a new collection Object each time it is called', () => {
    const first = createCollection()
    const second = createCollection()
    expect(first).to.be.an('object')
    expect(second).to.be.an('object')
    expect(first).not.to.equal(second)
  })

  describe('collection.create()', () => {

    let collection

    beforeEach(() => {
      collection = createCollection()
      expect(collection)
        .to.have.property('create')
        .that.is.a('function')
    })

    it('returns the created item', () => {
      const item = { foo: 'bar' }
      const created = collection.create(item)
      expect(created).to.be.an('object')
      expect(created).to.include(item)
    })

    it('assigns an id to the item', () => {
      const item = { foo: 'bar' }
      const created = collection.create(item)
      expect(created)
        .to.have.property('id')
        .that.is.a('number')
    })

    it('assigns a unique id to the item', () => {
      const first = { foo: 'bar' }
      const second = { baz: 'qux' }
      const createdFirst = collection.create(first)
      const createdSecond = collection.create(second)
      expect(createdFirst)
        .to.have.property('id')
        .that.is.a('number')
      expect(createdSecond)
        .to.have.property('id')
        .that.is.a('number')
      expect(createdFirst.id).not.to.equal(createdSecond.id)
    })

  })

  describe('collection.findById(id)', () => {

    let collection

    beforeEach(() => {
      collection = createCollection()
      expect(collection)
        .to.have.property('findById')
        .that.is.a('function')
    })

    context('when the item exists', () => {

      it('returns the found item', () => {
        const item = collection.create({ foo: 'bar' })
        const found = collection.findById(item.id)
        expect(found)
          .to.be.an('object')
          .that.includes(item)
      })

    })

    context('when the item does not exist', () => {

      it('returns null', () => {
        const found = collection.findById(1)
        expect(found).to.equal(null)
      })

    })

  })

  describe('collection.updateById(id)', () => {

    let collection

    beforeEach(() => {
      collection = createCollection()
      expect(collection)
        .to.have.property('updateById')
        .that.is.a('function')
    })

    context('when the item exists', () => {

      it('returns the updated item', () => {
        const item = collection.create({ foo: 'bar' })
        const updates =  { foo: 'baz' }
        const updated = collection.updateById(item.id, updates)
        expect(updated)
          .to.be.an('object')
          .that.includes({
            ...item,
            ...updates
          })
      })

    })

    context('when the item does not exist', () => {

      it('returns null', () => {
        const updated = collection.updateById(1, { foo: 'bar' })
        expect(updated).to.equal(null)
      })

    })

  })

  describe('collection.findWhere(query)' , () => {

    let collection

    beforeEach(() => {
      collection = createCollection()
      expect(collection)
        .to.have.property('findWhere')
        .that.is.a('function')
    })

    context('when the query is empty', () => {

      it('returns an Array of all items', () => {
        const first = collection.create({ foo: 'bar' })
        const second = collection.create({ foo: 'baz' })
        const items = collection.findWhere({})
        expect(items).to.be.an('array')
        expect(items).to.have.lengthOf(2)
        expect(items).to.include(first)
        expect(items).to.include(second)
      })

    })

    context('when no items match the query', () => {

      it('returns an empty Array', () => {
        collection.create({ foo: 'bar' })
        collection.create({ foo: 'baz' })
        const items = collection.findWhere({ foo: 'qux' })
        expect(items).to.be.an('array')
        expect(items).to.have.lengthOf(0)
      })

    })

    context('when any items match the query', () => {

      it('returns an Array of matching items', () => {
        const first = collection.create({ foo: 'bar' })
        const second = collection.create({ foo: 'baz' })
        const third = collection.create({ foo: 'bar' })
        const items = collection.findWhere({ foo: 'bar' })
        expect(items).to.be.an('array')
        expect(items).to.have.lengthOf(2)
        expect(items).to.include(first)
        expect(items).to.include(third)
        expect(items).not.to.include(second)
      })

    })

  })

  describe('collection.deleteById(id)' , () => {

    let collection

    beforeEach(() => {
      collection = createCollection()
      expect(collection)
        .to.have.property('deleteById')
        .that.is.a('function')
    })

    context('when the item exists', () => {

      it('returns the deleted item', () => {
        const item = collection.create({ foo: 'bar' })
        const deleted = collection.deleteById(item.id)
        expect(deleted)
          .to.be.an('object')
          .that.includes(item)
      })

      it('removes the matching item from the collection', () => {
        const first = collection.create({ foo: 'bar' })
        const second = collection.create({ foo: 'baz' })
        const third = collection.create({ foo: 'bar' })
        collection.deleteById(second.id)
        const found = collection.findById(second.id)
        expect(found).to.equal(null)
        const items = collection.findWhere({})
        expect(items).to.have.lengthOf(2)
        expect(items).to.include(first)
        expect(items).to.include(third)
      })

    })

    context('when the item does not exist', () => {

      it('returns null', () => {
        const item = collection.create({ foo: 'bar' })
        const deleted = collection.deleteById(item.id + 1)
        expect(deleted).to.equal(null)
      })

      it('does not remove any items from the collection', () => {
        const first = collection.create({ foo: 'bar' })
        const second = collection.create({ foo: 'baz' })
        const third = collection.create({ foo: 'bar' })
        collection.deleteById(third.id + 1)
        const items = collection.findWhere({})
        expect(items).to.have.lengthOf(3)
        expect(items).to.include(first)
        expect(items).to.include(second)
        expect(items).to.include(third)
      })

    })

  })

})
