/* global state, queryString, renderPokedex */

renderApp(state)

function renderApp(state) {
  var $app = document.querySelector('#app')
  $app.innerHTML = ''
  $app.appendChild(renderPokedex(state.pokedex, state.type))
}

/**
 * Add your 'hashchange' event listener here.
 *
 */

window.addEventListener('hashchange', (event) => {
  var hash = location.hash
  var type = queryString.parse(hash.slice(1))['type']
  state.type = type
  renderApp(state)
})

window.dispatchEvent(new Event('hashchange'))
