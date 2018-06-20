const { expect } = chai

describe('createAccount()', () => {

  let account

  beforeEach(() => {
    account = createAccount()
  })

  it('returns an account Object', () => {
    expect(account).to.be.an('object')
  })

  it('returns an account Object with four methods', () => {
    expect(account)
      .to.have.property('deposit')
      .that.is.a('function')
    expect(account)
      .to.have.property('withdraw')
      .that.is.a('function')
    expect(account)
      .to.have.property('getBalance')
      .that.is.a('function')
    expect(account)
      .to.have.property('getHistory')
      .that.is.a('function')
  })

  it('returns a new account Object each time it is called', () => {
    expect(account).not.to.equal(createAccount())
  })

  describe('account.getBalance()', () => {

    context('when there are no transactions', () => {

      it('returns 0', () => {
        const balance = account.getBalance()
        expect(balance).to.equal(0)
      })
    })

    context('when there is a deposit of 10', () => {

      it('returns 10', () => {
        account.deposit(10)
        const balance = account.getBalance()
        expect(balance).to.equal(10)
      })

    })

    context('when there is a deposit of 10 and withdrawal of 2', () => {

      it('returns 8', () => {
        account.deposit(10)
        account.withdraw(2)
        const balance = account.getBalance()
        expect(balance).to.equal(8)
      })

    })

  })

  describe('account.getHistory()', () => {

    context('when there are no transactions', () => {

      it('returns an empty Array', () => {
        const history = account.getHistory()
        expect(history).to.be.an('array')
        expect(history).to.have.lengthOf(0)
      })

    })

    context('when there are one or more transactions', () => {

      beforeEach(() => {
        account.deposit(10)
        account.withdraw(2)
      })

      it('returns an Array of transaction Objects', () => {
        const history = account.getHistory()
        expect(history).to.have.lengthOf(2)
        const [ deposit, withdrawal ] = history
        expect(deposit)
          .to.have.property('type')
          .that.equals('deposit')
        expect(deposit)
          .to.have.property('amount')
          .that.equals(10)
        expect(withdrawal)
          .to.have.property('type')
          .that.equals('withdrawal')
        expect(withdrawal)
          .to.have.property('amount')
          .that.equals(2)
      })

      it('returns a deep copy of the transaction history', () => {
        const first = account.getHistory()
        const second = account.getHistory()
        expect(first).not.to.equal(second)
        expect(first).to.deep.equal(second)
        first.forEach((transaction, index) => {
          expect(transaction).not.to.equal(second[index])
          expect(transaction).to.deep.equal(second[index])
        })
      })

    })

  })

})
