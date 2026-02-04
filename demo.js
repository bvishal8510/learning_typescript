// let msg;
// msg = 1;
// console.log(msg);
var demo = /** @class */ (function () {
    function demo() {
        this.num1 = 2;
        this.num3 = 4;
    }
    demo.prototype.demofunc = function (num2) {
        console.log(num2 + this.num1);
    };
    return demo;
}());
var obj = new demo();
obj.demofunc(3);
console.log(obj.num3);
console.log(obj.num1);
