
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]
let first=arr[0];
let ans=first(2,3);
console.log(ans);
const fun2 =()=>{
   console.log("hello"); 
}
fun2();
let obj={
    name:"smit",
    greet:()=>{
        console.log("kem chhe smit");
    }
};
obj.greet();    
// function solve(Number){
//     return function(number){
//         return number*number;
//     }
// }

// function greetme(greet,myname){
// console.log("hello ",myname);
// greet();
// }
// function greet(){
//     console.log("greeting for the day");
// }
// greetme(greet,"smit");
// let ans=solve(6);
// let finalans=ans(4);
// console.log(finalans);
