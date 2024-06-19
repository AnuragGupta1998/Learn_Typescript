//aliases(type) is the keyword

type User = {
    name:string;
    email:string;
    isActive:boolean;
    password:number
}

function createUser(user: User): User{
    // return user;
    return {name:"Anurag",email:"a@gmail.com",isActive:true,password:1234}
}

createUser({name:"Anurag",email:"a@gmail.com",isActive:true,password:1234})

export {}