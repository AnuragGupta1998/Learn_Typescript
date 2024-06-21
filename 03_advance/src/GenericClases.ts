//we specify second generic type should be number

function f1<T,U extends number>(x: T , y: U): object{
    return{
        x,
        y
    }
}

f1("3",3)
f1(2,4);

//another function
interface User{
    name:string;
    age:number;
}

function f2<T,U extends User>(x: T , y: U): object{
    return {
        x,
        y
    }
}
f2(2,{name:"anurag",age:20})

//classess.......................................
interface Quize{
    name:string;
    type:string;
}

interface Course{
    name:string;
    author:string;
    subject:string;
}

class Owner <T>{
    public card : T[] =[];    //cart is array of T type

    addToCart(product:T){
        this.card.push(product)
    }
}

const o1 = new Owner()