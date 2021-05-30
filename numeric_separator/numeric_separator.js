var Amount = /** @class */ (function () {
    function Amount(amount) {
        this.MAX_AMOUNT = 1000000;
        if (amount > this.MAX_AMOUNT) {
            throw new RangeError("Amount must be smaller than" + this.MAX_AMOUNT);
        }
        this.amount = amount;
    }
    Amount.prototype.formatByMillion = function () {
        return this.amount / 1000000;
    };
    return Amount;
}());
// const invalid_amount = new Amount(1_000_000_000)
var valid_amount = new Amount(100000);
console.log('Format by million', valid_amount.formatByMillion());
