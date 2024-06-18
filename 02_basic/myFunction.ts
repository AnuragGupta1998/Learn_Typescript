function addTwo(num: number){
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUp(name:string,email:string,valid:boolean){
    return `${name}${email}${valid}`
}

function login(email:string,password:number){
    return `${email}${password}`
}

addTwo(7)
getUpper("anurag")
signUp("anurag","a@gmail.com",true)
login("a@gmail.com",12345)

export {}