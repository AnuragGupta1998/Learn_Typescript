abstract class A{
    
    constructor(public name:string,public age:number){

    }
    abstract display():void;

    doing():number{
        return 10
    }
}

class B extends A{
    
    constructor(public name:string , public age:number, public bName:string){

        super(name,age)
    }
    display(): void {
        console.log("Class B extends Abtract Class A")
    }
}

const obj= new B("Anurag",25,"B-Class")

console.log(obj.name,obj.age,obj.bName)
obj.display()
console.log(obj.doing()) 