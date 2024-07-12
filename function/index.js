
//parameter function
// function arithmatic( a, b){
// let c=a;
//     return c;
// }
// console.log(arithmatic(70,14));
const mult=function(a,b){
    return a*b;
}
console.log(mult(2,20));

//arrow function
let add =(x,y)=>{
    return x**y;
}
console.log(add(2,10));

for (const c of "smit") {
    console.log(c);
}
let obj={
    name:"smit",
    role:"programer"

}
for (const key in obj) {
    
        const element = obj[key];
        console.log(element);

}