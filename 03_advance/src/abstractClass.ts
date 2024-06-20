//interface....
interface B{

    n:string;
    a:number;
    display():number;
}
class A implements B{
   n="anurag";
   a=20;
   display(): number {
       return this.a
   }
}
const a = new A()
console.log(a.n,a.a)
console.log(a.display()) 

//abstract class




export {}