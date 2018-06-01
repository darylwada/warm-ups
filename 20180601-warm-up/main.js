function createElement(tagName, attributes, children) {
  var $HTMLElement = document.createElement(tagName)
  for (var key in attributes) {
    $HTMLElement.setAttribute(key, attributes[key])
  }

  children.forEach(function (child) {
    if (child instanceof Node) {
      $HTMLElement.appendChild(child)
    }
    else {
      $HTMLElement.textContent = child
    }
  })

  return $HTMLElement
}

function renderDiv() {
  return createElement('div', '', [])
}

function renderSpan() {
  return createElement('span', '', ['Hello'])
}

function renderInput() {
  return createElement('input', { type: "number" }, [])
}

function renderButton() {
  return createElement('button', {type: "button", class: "btn", class: "btn-primary" }, ['Primary'])
}

function renderBadge() {
  return createElement('h1', '', [
    'Example heading', createElement('span', { class: "badge", class: "badge-secondary" }, ['New'])
  ])
}

function renderListGroup() {
  return createElement('ul', { class: "list-group" }, [
    createElement('li', { class: "list-group-item" }, ['Craw justo odio']),
    createElement('li', { class: "list-group-item" }, ['Dapibus ac facilisis in']),
    createElement('li', { class: "list-group-item" }, ['Morbi leo risus']),
    createElement('li', { class: "list-group-item" }, ['Porta ac consectetur ac']),
    createElement('li', { class: "list-group-item" }, ['Vestibulum at eros'])
  ])
}

function renderCard() {
  return createElement('div', { class: "card", style: "width: 18rem;" }, [
    createElement('img', { class: "card-img-top", src: "...", alt: "Card image cap"}, []),
    createElement('div', { class: "card-body"}, [
      createElement('h5', { class: "card-title" }, ['Card title']),
      createElement('p', { class: "card-text" }, ['Some quick example text to build on the card title and make up the bulk of the card\'s content.']),
      createElement('a', { href: "#", class: "btn", class: "btn-primary" }, ['Go somewhere'])
    ])
  ])
}

function renderForm() {
  return createElement('form', '', [
    createElement('div', { class: "form-group" }, [
      createElement('label', { for: "exampleInputEmail1" }, ['Email address']),
      createElement('input', { type: "email", class: "form-control", id: "exampleInputEamil1", 'aria-describedby': "emailHelp", placeholder: "enter email"}, [])
    ]),
    createElement('buton', { type: "submit", class: "btn", class: "btn-primary" }, ['Submit'])
  ])
}
