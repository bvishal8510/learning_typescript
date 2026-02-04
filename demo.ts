// let msg;
// msg = 1;
// console.log(msg);

class demo {
    private num1: number = 2;
    public num3: number = 4;
    demofunc(num2: number) :void {
        console.log(num2+this.num1);
    }
}

let obj = new demo();
obj.demofunc(3);
console.log(obj.num3);
// console.log(obj.num1);   gives error as num1 is private