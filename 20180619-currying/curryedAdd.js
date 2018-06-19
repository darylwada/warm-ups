function curryedAdd(num1) {
  return function(num2) {
    return num1 + num2
  }
}

console.log(curryedAdd(6)(2))
// => 8
