
class Counter {
    counter:number;
    constructor() {
        this.counter = 0
    }

    increament():number {
        ++this.counter;
        return this.counter;
    }
    
    decreament():number {
        if(this.counter > 0) --this.counter; 
        return this.counter;
    }

    reset():number {
        this.counter = 0;
        return this.counter;
    }
}

let obj = new Counter();
console.log(obj.increament());
console.log(obj.increament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.decreament());
console.log(obj.increament());
console.log(obj.reset());
console.log(obj.increament());