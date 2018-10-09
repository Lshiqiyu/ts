interface testObj {
    name: string
    readonly age: number
    job?: string
    gander: string
}

function Person(obj: testObj) {
    console.time();
    console.groupCollapsed('开始');
    console.profile('profile');
    document.write(obj.name);
    console.log('%c' + obj.name, 'color:red;font-style: italic');
    console.dir(obj);
    console.table(obj);
    console.trace();
    console.profileEnd();
    console.groupEnd();
    console.timeEnd();
    console.assert(typeof obj === 'object', 'this obj is not true', obj);
    console.log(obj.job);
    // obj.age = obj.age + 2
    console.log(obj.age)
}

let zhangsan = {
    name: 'zhangsan',
    age: 30,
    job: 'engineer',
    gander: 'man'
}

Person(zhangsan);


// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface;
// }
//
// interface ClockInterface {
//     tick()
// }
//
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigtalClock implements ClockInterface {
//     constructor (h: number, m: number){}
//     tick() {
//         console.log("beep beep")
//     }
// }
//
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number){}
//     tick(){
//         console.log("tick,tock")
//     }
// }
// let digital = createClock(DigtalClock,12,17)
// let analog  = createClock(AnalogClock,7,32)
// digital.tick()
// console.log(digital);
// console.log(analog);


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {}
    sayTime() {
        console.log(this.currentTime);
    }
    setTime(d:Date){
        this.currentTime = d
        return this.currentTime
    }
}
let lisi = new Clock(12,15)
let da = new Date()
console.log(lisi.setTime(da));

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape,PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = 'red';
square.sideLength = 30;
square.penWidth = 0.5;


























