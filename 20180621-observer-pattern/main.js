function createEmitter() {

  const listeners = {}

  return {
    on(eventType, listener) {
      if (listeners[eventType]) {
        listeners[eventType] = [...listeners[eventType], listener]
      }
      else {
        listeners[eventType] = [listener]
      }
    },
    emit(eventType, payload) {
      if (listeners[eventType]) {
        listeners[eventType].forEach(listener => listener(payload))
      }
    }
  }

}

const emitter = createEmitter()

emitter.on('vote', () => {
  console.log('vote received')
})

emitter.on('vote', payload => {
  console.log('vote for', payload.candidate)
})

emitter.on('done', () => {
  console.log('the poll is closed')
})


emitter.emit('vote', { candidate: 'pedro' })
// vote received
// vote for pedro

emitter.emit('vote', { candidate: 'pedro' })
// vote received
// vote for pedro

emitter.emit('vote', { candidate: 'summer' })
// vote received
// vote for summer

emitter.emit('vote', { candidate: 'pedro' })
// vote received
// vote for pedro

emitter.emit('done')
// the poll is closed
