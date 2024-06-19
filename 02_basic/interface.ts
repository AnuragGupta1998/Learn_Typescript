interface User {
    readonly dbId:number;
    name:string;
    email:string;
    userId:number;
    googleId?:number;   //optional

    display: () => string;

    display2(): string;

    discount(coupan:string,percent:number): number;
}

const Anurag: User={
    name:"anurag",
    email:"a@gmail.com",
    dbId:1,
    userId:22,
    googleId:333,
    
    display: () => {
        return "first method od interface"
    },

    display2: () => {
        return "display 2 method"
    },
   discount:(name:"a", off: 10) =>{
    return 10;    
   }
}

//inheritance in interface
interface A{
    name:string
}
interface B extends A{
    role:string
}

let Anur: B={
    role:"engineer",
    name:"Anurag"

}
