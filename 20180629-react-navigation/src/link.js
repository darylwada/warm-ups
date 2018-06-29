import React from 'react'
import * as queryString from './query-string'

export default function Link({ path = '', params = {}, isActive, ...props }) {
  const className = isActive
    ? 'nav-link active'
    : 'nav-link'
  return (
    <a
      {...props}
      className={className}
      href={'#' + path + queryString.stringify(params)}/>
  )
}
