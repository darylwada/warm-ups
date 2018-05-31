function createElement(tagName, attributes, children) {
  var $HTMLElement = document.createElement(tagName)
  for (var key in attributes) {
    $HTMLElement.setAttribute(key, attributes[key])
  }

  children.forEach(function(child) {
    if (typeof child === 'object') {
      $HTMLElement.appendChild(child)
    } else {
      $HTMLElement.textContent = child
    }
  })

  return $HTMLElement
}

var stopWatch = {
  isStarted: false,
  timeElapsed: 0,
  timeLimit: 0
}

var isStarted = stopWatch.isStarted
var timeLimit = stopWatch.timeLimit
var timeElapsed = stopWatch.timeElapsed
var isExpired = timeElapsed >= timeLimit
var isPaused = !isStarted && timeElapsed > 0

var timeElapsedClass = isExpired
  ? 'time-elapsed is-expired'
  : 'time-elapsed'
var startText = isPaused ? 'Start' : 'Pause'
var resetClass = isPaused ? 'reset' : 'reset hidden'

var $stopWatch =
  createElement('div', { class: 'stop-watch' }, [
    createElement('h1', { class: timeElapsedClass }, [timeElapsed]),
    createElement('div', { class: 'controls' }, [
      createElement('button', { class: 'start' }, [startText]),
      createElement('button', { class: resetClass }, ['Reset']),
      createElement('hr', {}, []),
      createElement('form', {}, [
        createElement('input', { type: 'number', value: timeLimit }, []),
        createElement('button', { type: 'submit' }, ['Set Limit'])
      ])
    ])
  ])

  console.log($stopWatch)

  /**
   * <div class="stop-watch">
   *   <h1 class="time-elapsed">0</h1>
   *   <div class="controls">
   *     <button class="start">Start</button>
   *     <button class="reset hidden">Reset</button>
   *     <hr/>
   *     <form>
   *       <input type="number" value="0"/>
   *       <button type="submit">Set Limit</button>
   *     </form>
   *   </div>
   * </div>
   */
