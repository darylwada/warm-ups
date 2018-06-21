const { expect } = chai
const { stub } = sinon

describe('createEmitter()', () => {

  let emitter

  beforeEach(() => {
    emitter = createEmitter()
  })

  it('returns an emitter Object', () => {
    expect(emitter).to.be.an('object')
  })

  it('returns an emitter Object with two methods', () => {
    expect(emitter)
      .to.have.property('on')
      .that.is.a('function')
    expect(emitter)
      .to.have.property('emit')
      .that.is.a('function')
  })

  it('returns a new emitter Object each time it is called', () => {
    expect(emitter).not.to.equal(createEmitter())
  })

  describe('emitter.emit()', () => {

    context('when no listeners have been registered', () => {

      it('does nothing', () => {
        expect(() => emitter.emit('test'))
          .not.to.throw()
      })

    })

    context('when a listener has been registered', () => {

      it('calls the listener', done => {
        emitter.on('test', () => {
          done()
        })
        emitter.emit('test')
      })

      it('calls the listener with the provided payload', done => {
        const provided = { foo: 'bar' }
        emitter.on('test', payload => {
          expect(provided).to.equal(payload)
          done()
        })
        emitter.emit('test', provided)
      })

    })

    context('when listeners are registered for the same event type', () => {

      it('calls each listener with the provided payload', done => {
        const provided = { foo: 'bar' }
        const onEmit = stub()
          .onCall(1)
          .callsFake(() => done())
        emitter.on('test', payload => {
          expect(payload).to.equal(provided)
          onEmit()
        })
        emitter.on('test', payload => {
          expect(payload).to.equal(provided)
          onEmit()
        })
        emitter.emit('test', provided)
      })

    })

    context('when listeners are registered for different event types', () => {

      it('only calls the listeners for the specified event type', done => {
        emitter.on('error', () => {
          throw new Error('wrong listener called!')
        })
        emitter.on('test', () => {
          done()
        })
        emitter.emit('test')
      })

    })

  })

})
