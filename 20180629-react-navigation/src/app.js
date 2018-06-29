import React, { Component } from 'react'
import Nav from './nav'
import Pokemon from './pokemon'
import Pokedex from './pokedex'
import Pokeball from './pokeball'
import parseHash from './parse-hash'
import * as queryString from './query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = { path, params }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
  }
  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }
  renderHome() {
    return <Pokeball/>
  }
  renderPokedex() {
    const { navigate } = this
    const { pokedex } = this.props
    const { type } = this.state.params
    return <Pokedex type={type} pokedex={pokedex} navigate={navigate}/>
  }
  renderPokemon() {
    const { pokedex } = this.props
    const { number } = this.state.params
    const pokemon = pokedex.find(pokemon => pokemon.number === number)
    return <Pokemon pokemon={pokemon}/>
  }
  renderView() {
    console.log(this.state)
    switch (this.state.path) {
      case 'pokedex':
        return this.renderPokedex()
      case 'pokemon':
        return this.renderPokemon()
      default:
        return this.renderHome()
    }
  }
  render() {
    return (
      <div className="container">
        <Nav activeType={this.state.params.type}/>
        { this.renderView() }
      </div>
    )
  }
}
