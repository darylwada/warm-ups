import React from 'react'
import PokemonCard from './pokemon-card'

export default function Pokedex({ pokedex }) {
  return (
    <div className="row">
      {
        pokedex.map(pokemon => {
          return (
            <div key={pokemon.number} className="col-md-4">
              <PokemonCard pokemon={pokemon}/>
            </div>
          )
        })
      }
    </div>
  )
}
