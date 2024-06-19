let score : number | string = 33
score="anurag"

type User = {
    id:number;
    name:string;
}

type Admin = {
    id:number;
    username:string;
}

let Anurag: User | Admin ={
    id:1,
    name:"a"
}
Anurag={
    id:2,
    username:"aa"
}

function getData(id: number | string){

    if(typeof id === "number"){
        id+2
    }
    else{
        id.toLowerCase()
    }
}
