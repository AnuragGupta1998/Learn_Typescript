type User = {
    readonly _id:string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetail?: number;     //here creditcardDetail is optional(?)
}

let myUser: User ={
    _id:"1",
    name:"Anurag",
    email:"a@gmail.com",
    isActive:false,
}

let myUser2: User ={
    _id:"2",
    name:"Anurag2",
    email:"a2@gmail.com",
    isActive:true,
    creditcardDetail:1234
}

type cardName = {
    cardName:string
}
type cardNumber = {
    cardNumber:number
}
type cardCVV = {
    cardCVV:number
}
type cardPin = {
    cardPin:number
}

type cardDetail = cardName & cardNumber & cardCVV & cardPin;

let myCard: cardDetail ={
    cardName:"masterCard",
    cardNumber:12345678,
    cardCVV:123,
    cardPin:1998
}

export {}