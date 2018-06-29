import React from 'react'

export default function PokemonCard({ pokemon }) {
  const { name, number, imageUrl } = pokemon
  return (
    <div className="card" data-number={number} title={name}>
      <img className="card-img-top" src={imageUrl} alt={name}/>
      <div className="card-body">
        <h5 className="card-title">
          {name}
          <span className="text-muted"> #{ number }</span>
        </h5>
      </div>
    </div>
  )
}
