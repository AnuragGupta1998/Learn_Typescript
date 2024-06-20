
class User3{
    name1: string;
    email: string;
    private readonly city: string="Delhi"

    private code:number = 1998

    constructor( name: string ,  email: string){
        this.name1 = name;
        this.email = email;
    }

    get getCode():number{
        return this.code
    }

    
    set value(v) {
        this.code = v;
    }
    

}

const obj1 = new User3("Anurag","anurag@gmail.com");
console.log(obj1)

console.log(obj1.getCode)
obj1.value=200
console.log(obj1.getCode)



