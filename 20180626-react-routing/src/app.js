import React, { Fragment, Component } from 'react'
import Nav from './nav'
import Pokedex from './pokedex'
import * as queryString from './query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }
  componentDidMount() {

    /**
     * Your code here
     */

    window.addEventListener('hashchange', event => {
      const hash = location.hash
      const type = queryString.parse(hash.slice(1)).type
      this.setState({ type: type })
    })

    window.dispatchEvent(new Event('hashchange'))

  }
  render() {
    const { type } = this.state
    const { pokedex } = this.props
    const activePokemon = type
      ? pokedex.filter(pokemon => pokemon.type === type)
      : pokedex
    return (
      <Fragment>
        <h1 className="text-center">Pokedex</h1>
        <div className="container">
          <Nav activeType={type}/>
          <Pokedex pokedex={activePokemon}/>
        </div>
      </Fragment>
    )
  }
}
