import React from 'react'
import Link from './link'

export default function Nav({ activeType }) {
  return (
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link path="pokedex" isActive={activeType === ''}>
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="pokedex"
            params={{ type: 'grass' }}
            isActive={activeType === 'grass'}>
            Grass
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="pokedex"
            params={{ type: 'fire' }}
            isActive={activeType === 'fire'}>
            Fire
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="pokedex"
            params={{ type: 'water' }}
            isActive={activeType === 'water'}>
            Water
          </Link>
        </li>
      </ul>
    </div>
  )
}
