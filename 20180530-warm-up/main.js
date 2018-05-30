var stopWatch = {
  isStarted: false,
  timeElapsed: 10,
  timeLimit: 10
}

function renderStopWatch(stopWatch) {
  var $div = document.createElement('div')
  var $timeElapsed = document.createElement('h1')
  var $button = document.createElement('button')
  $div.classList.add('stop-watch')
  $timeElapsed.classList.add('time-elapsed')

  $timeElapsed.textContent = stopWatch.timeElapsed

  if (stopWatch.isStarted) {
    $button.textContent = 'Pause'
  } else
  {
    $button.textContent = 'Start'
  }

  if (stopWatch.timeElapsed >= stopWatch.timeLimit) {
    $timeElapsed.classList.add('is-expired')
    $button.textContent = 'Reset'
  }

  $div.appendChild($timeElapsed)
  $div.appendChild($button)

  return $div
}

console.log(renderStopWatch(stopWatch))
