import React from 'react'
import Link from './link'

export default function Nav({ activeType }) {
  return (
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link isActive={activeType === ''}>
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link params={{ type: 'grass' }} isActive={activeType === 'grass'}>
            Grass
          </Link>
        </li>
        <li className="nav-item">
          <Link params={{ type: 'fire' }} isActive={activeType === 'fire'}>
            Fire
          </Link>
        </li>
        <li className="nav-item">
          <Link params={{ type: 'water' }} isActive={activeType === 'water'}>
            Water
          </Link>
        </li>
      </ul>
    </div>
  )
}
