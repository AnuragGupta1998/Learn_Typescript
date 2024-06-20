const a : Array<number>=[] //a is the type of array that only accept numbers

//first funtion
function f1<T>(val:T[]):T[]{
    return val
}

//second
function f2<T>(val:T[]):T{
    return val[2]
}

//arrow funtion
const f3 = <T>(val: T[]): T[] =>{
    return val;
}

//another arrow function

const f4 = <T>(val: T[]) :T =>{
    return val[2]
}