//while taking argument we checked argument type and 
//while return we checked the return type
function addTwo(num: number): number{
    return num+2;
}

//arrow function for addition
const add = (n: number) :number =>{
    return n+1;
}

//arrow function
const getName = (name:string): string =>{
    return name;
}

//map method
const heros = ["superman","batman","spiderman","ironman"]

const data = heros.map((hero): string =>{

    return `hero are ${hero}`
})


// void return
function display(msg: string): void{
    console.log(`msg are ${msg}`)
}
// never return
function handleError(msg: string): never{
    throw new Error(msg)
}

addTwo(4);
add(5);
getName("Anurag");
display("message void keyword as return ")
handleError("never keyword as return ")


export {}