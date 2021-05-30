class Amount {
  MAX_AMOUNT = 1_000_000
  amount: number

  constructor(amount: number) {
    if(amount > this.MAX_AMOUNT) {
      throw new RangeError("Amount must be smaller than" + this.MAX_AMOUNT)
    }
    this.amount = amount
  }

  formatByMillion() {
    return this.amount / 1_000_000
  }
}

// const invalid_amount = new Amount(1_000_000_000)
const valid_amount = new Amount(100_000)
console.log('Format by million', valid_amount.formatByMillion())
