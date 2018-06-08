/* global queryString, div, img, h1, h5, span, p, ul, li, a */
/* eslint-disable no-unused-vars */

function renderPokedex(pokedex, active) {
  if (active) {
    pokedex = pokedex.filter(function (pokemon) {
      return pokemon.type === active
    })
  }
  return (
    div('#pokedex.container', null, [
      h1('.text-center', null, 'Pokedex'),
      div('.row', null, [
        ul('.nav.nav-pills', null, [
          li('.nav-item', null, renderNavLink('All', '#', active)),
          li('.nav-item', null, renderNavLink('Grass', '#?type=grass', active)),
          li('.nav-item', null, renderNavLink('Fire', '#?type=fire', active)),
          li('.nav-item', null, renderNavLink('Water', '#?type=water', active))
        ])
      ]),
      div('.row', null, pokedex.map(function (pokemon) {
        return div('.col-md-4', null, renderPokemon(pokemon))
      }))
    ])
  )
}

function renderNavLink(text, href, active) {
  var params = queryString.parse(href.slice(1))
  var selector = params.type === active
    ? '.nav-link.active'
    : '.nav-link'
  return a(selector, { href: href }, text)
}

function renderPokemon(pokemon) {
  return (
    div('.card', { 'data-number': pokemon.number }, [
      img('.card-img-top', { src: pokemon.imageUrl, alt: pokemon.name }),
      div('.card-body', null, [
        h5('.card-title', null, [
          pokemon.name,
          span('.text-muted', null, ' #' + pokemon.number)
        ]),
        p('.card-text', null, pokemon.description)
      ])
    ])
  )
}
