var tagNames = ['div', 'img', 'h1', 'h5', 'span', 'p', 'ul', 'li', 'a']

tagNames.forEach(function (tagName) {
  window[tagName] = function (selector, attributes, children) {
    selector = selector || ''
    attributes = attributes || {}
    children = children ? [].concat(children) : []
    return createElement(tagName + selector, attributes, children)
  }
})

function createElement(selector, attributes, children) {
  var fromSelector = parseSelector(selector)
  var $element = document.createElement(fromSelector.tagName)
  if (fromSelector.id) {
    $element.id = fromSelector.id
  }
  if (fromSelector.className) {
    $element.className = fromSelector.className
  }
  for (var key in attributes) {
    $element.setAttribute(key, attributes[key])
  }
  children.forEach(function (child) {
    child instanceof Node
      ? $element.appendChild(child)
      : $element.appendChild(document.createTextNode(child))
  })
  return $element
}

function parseSelector(selector) {
  if (!selector) return {}
  const tagNameMatch = selector.match(/^\b\w+/) || []
  const tagName = tagNameMatch[0] || 'div'
  const idMatch = selector.match(/#(\w|-)+/) || ['#']
  const id = idMatch[0].slice(1) || ''
  const classMatch = selector.match(/\.(\w|-)+/g) || []
  const className = classMatch
    .map(function (match) {
      return match.replace('.', '')
    })
    .join(' ')
  return { id: id, tagName: tagName, className: className }
}
