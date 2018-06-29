import React, { Fragment, Component } from 'react'
import PokemonCard from './pokemon-card'

export default class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick({ target }) {
    const $card = target.closest('.card')
    if (!$card) return
    const number = $card.getAttribute('data-number')
    this.props.navigate({ path: 'pokemon', params: { number } })
  }
  render() {
    const { handleClick } = this
    const { type, pokedex } = this.props
    const activePokemon = type
      ? pokedex.filter(pokemon => pokemon.type === type)
      : pokedex
    return (
      <Fragment>
        <h1 className="text-center">Pokedex</h1>
        <div className="container">
          <div className="row" onClick={handleClick}>
            {
              activePokemon.map(pokemon => {
                return (
                  <div key={pokemon.number} className="col-md-4">
                    <PokemonCard pokemon={pokemon}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
