let $dataView = document.body.firstElementChild

$dataView.addEventListener('click', (event) => {
  let $target = event.target
  let $closestCard = $target.closest('.card')
  console.log($closestCard.dataset.number);
})
