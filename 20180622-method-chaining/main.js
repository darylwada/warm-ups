function createDOM(tagName) {

  const $element = document.createElement(tagName)

  return {
    element() {
      return $element
    },
    attribute(name, value) {
      $element.setAttribute(name, value)
      return this
    },
    text(value) {
      $element.textContent = value
      return this
    },
    child(tagName) {
      $element.appendChild(createDOM(tagName).element())
      return createDOM(tagName)
    }
  }

}

console.log( createDOM('div') )
console.log( createDOM('div').attribute('type', 'text') )  // value of {this} is set to return object of createDOM
console.log( createDOM('div').attribute('type', 'text').element() )  // value of {this} is set to return object of createDOM.attribute()}

const $div = createDOM('div')
  .element()

console.log($div)

/**
 * <div></div>
 */


const $input = createDOM('input')
  .attribute('type', 'text')
  .element()

console.log($input)

/**
 * <input type="text"/>
 */


const $h1 = createDOM('h1')
  .attribute('class', 'special')
  .text('Method Chaining!')
  .element()

console.log($h1)

/**
 * <h1 class="special">Method Chaining!</h1>
 */


const card = createDOM('div')
  .attribute('class', 'card')
  .attribute('style', 'width: 18rem;')

card
  .child('img')
  .attribute('class', 'card-img-top')

card
  .child('div')
  .attribute('class', 'card-body')
  .child('p')
  .attribute('class', 'card-text')
  .text('Some quick example text.')

const $card = card.element()

console.log(card)
console.log($card)

/**
 * <div class="card" style="width: 18rem;">
 *   <img class="card-img-top"/>
 *   <div class="card-body">
 *     <p class="card-text">Some quick example text.</p>
 *   </div>
 * </div>
 */
