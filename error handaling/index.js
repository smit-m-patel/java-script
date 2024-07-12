// try{
//     //referance error
//    let a;
//     console.log("hello");
// }
// catch(err){
// console.log("you are in catch: ",err);
// }
// finally{
//     console.log("i will run every time");
// }


//create a custom error

// try{
//     //reference error
//     console.log(a);
// }
// catch(err){
//     throw new Error("plese declare the data type of your variable");
// }

let errorcode=100;
if(errorcode==100){
    throw new Error("invalid json");
}