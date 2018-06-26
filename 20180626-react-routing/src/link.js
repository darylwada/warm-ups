import React from 'react'
import * as queryString from './query-string'

export default function Link({ params = {}, isActive, ...props }) {
  const className = isActive
    ? 'nav-link active'
    : 'nav-link'
  return (
    <a
      {...props}
      className={className}
      href={'#' + queryString.stringify(params)}/>
  )
}
