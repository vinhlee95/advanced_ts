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
var my_amount = new Amount(1000000000);
console.log(my_amount.formatByMillion());
