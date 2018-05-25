function forEach(list, procedure) {
  for (var i = 0; i < list.length; i++) {
    procedure(list[i])
  }
}


var students = [
  'JJ',
  'Franz',
  'Taylor',
  'Daryl',
  'Jeff',
  'Jerome',
  'Arthur'
]

forEach(students, function (student) {
  console.log(student, 'is in Cohort Twelve')
})

// "JJ is in Cohort Twelve"
// "Franz is in Cohort Twelve"
// "Taylor is in Cohort Twelve"
// "Daryl is in Cohort Twelve"
// "Jeff is in Cohort Twelve"
// "Jerome is in Cohort Twelve"
// "Arthur is in Cohort Twelve"
