function createAccount() {

  const transactions = []

  return {
    deposit(amount) {
      transactions.push({type: 'deposit', amount: amount})
    },
    withdraw(amount) {
      transactions.push({type: 'withdrawal', amount: amount})
    },
    getBalance() {
      return transactions.reduce((accumulator, transaction) => {
        return transaction.type === 'deposit'
          ? accumulator + transaction.amount
          : accumulator - transaction.amount
      }, 0)
    },
    getHistory() {
      return transactions.map(transaction => {
        return Object.assign({}, transaction)
      })
    }
  }

}

const savings = createAccount()
const checking = createAccount()

console.log(savings.getBalance())
// => 0

console.log(savings.deposit(10))
// => undefined

console.log(savings.getBalance())
// => 10

console.log(savings.getHistory())
/**
 * [
 *   { type: 'deposit', amount: 10 }
 * ]
 */

console.log(savings.withdraw(2))
// => undefined

console.log(savings.getBalance())
// => 8

console.log(savings.getHistory())
/**
 * [
 *   { type: 'deposit', amount: 10 },
 *   { type: 'withdrawal', amount: 2 }
 * ]
 */

console.log(checking.getBalance())
// => 0
