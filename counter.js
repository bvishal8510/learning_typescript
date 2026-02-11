var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increament = function () {
        ++this.counter;
        return this.counter;
    };
    Counter.prototype.decreament = function () {
        if (this.counter > 0)
            --this.counter;
        return this.counter;
    };
    Counter.prototype.reset = function () {
        this.counter = 0;
        return this.counter;
    };
    return Counter;
}());
var obj = new Counter();
console.log(obj.increament());
console.log(obj.increament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.increament());
console.log(obj.reset());
console.log(obj.increament());
