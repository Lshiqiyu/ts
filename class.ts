class Animal {
    name: string;
    constructor(theName:string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} move ${distanceInMeters}m. `)
    }
}

class Snake extends Animal {
    constructor (name: string){
        super(name)
    }
    move (dis = 5){
        console.log('Sssssssssssssss');
        super.move(dis)
    }
}

let sam = new Snake('Snake sss');
sam.move(3);



// class Employee {
//     fullName: string;
// }
// let employee = new Employee();
// employee.fullName = 'Bob';
// if(employee.fullName){
//     console.log(employee.fullName)
// }

let passcode = 'zhangsn';

class Employee {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName (newName: string){
        if(passcode&&passcode === 'zhangsan'){
            this._fullName = newName
        }else{
            console.error("Error: Unauthorized update of employee")
        }
    }
}

let employee = new Employee();
employee.fullName = "lisi";
if(employee.fullName){
    alert(employee.fullName)
}


















