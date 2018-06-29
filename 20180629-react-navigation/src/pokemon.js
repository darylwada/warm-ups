import React from 'react'

export default function PokemonDetails({ pokemon }) {
  const { name, number, imageUrl, description } = pokemon
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="card" data-number={number} title={name}>
            <img className="card-img-top" src={imageUrl} alt={name}/>
            <div className="card-body">
              <h5 className="card-title">
                {name}
                <span className="text-muted"> #{ number }</span>
              </h5>
              <p className="card-text">{ description }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
