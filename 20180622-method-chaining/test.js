const { expect } = chai

describe('createDOM(tagName)', () => {

  it('returns a builder Object', () => {
    const builder = createDOM('div')
    expect(builder).to.be.an('object')
  })

  it('returns a new builder Object each time it is called', () => {
    const first = createDOM('div')
    const second = createDOM('div')
    expect(first).to.be.an('object')
    expect(second).to.be.an('object')
    expect(first).not.to.equal(second)
  })

  describe('builder.element()', () => {

    it('returns the builder\'s element', () => {
      const builder = createDOM('div')
      expect(builder)
        .to.have.property('element')
        .that.is.a('function')
      expect(builder.element())
        .to.be.an.instanceOf(HTMLElement)
        .and.have.property('tagName')
        .that.equals('DIV')
    })

  })

  describe('builder.attribute(name, value)', () => {

    let builder

    beforeEach(() => {
      builder = createDOM('input')
      expect(builder)
        .to.have.property('attribute')
        .that.is.a('function')
    })

    it('is chainable', () => {
      const result = builder
        .attribute('type', 'text')
      expect(result).to.equal(builder)
    })

    it('sets an attribute on the builder\'s element', () => {
      const $input = builder
        .attribute('type', 'text')
        .element()
      expect($input)
        .to.have.attribute('type')
        .that.equals('text')
    })

  })

  describe('builder.text(content)', () => {

    let builder

    beforeEach(() => {
      builder = createDOM('p')
      expect(builder)
        .to.have.property('text')
        .that.is.a('function')
    })

    it('is chainable', () => {
      const result = builder
        .text('Method Chaining!')
      expect(result).to.equal(builder)
    })

    it('appends a textNode to the builder\'s element', () => {
      const $element = builder
        .text('Method Chaining!')
        .element()
      expect($element)
        .to.have.text('Method Chaining!')
    })

  })

  describe('builder.child(tagName)', () => {

    let parent

    beforeEach(() => {
      parent = createDOM('div')
      expect(parent)
        .to.have.property('child')
        .that.is.a('function')
    })

    it('returns a new builder object', () => {
      const child = parent
        .child('div')
      expect(child)
        .to.be.an('object')
        .with.all.keys(Object.keys(parent))
        .and.not.to.equal(parent)
    })

    it('appends a child element to its parent builder element', () => {
      parent.child('img')
      expect(parent.element()).to.contain('img')
    })

  })

})
