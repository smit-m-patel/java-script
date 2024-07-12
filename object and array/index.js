// let obj={
// name:"smit",
// age:19,
// wight:72,
// hight:"6ft",
// greet:function(){
//     console.log("kem chho badha");
// }
// };
// for(let key in obj){
//     console.log("key is:",key,",obj is:",obj[key]);
// }
// console.log(obj);
// obj.greet();

// array declaration

// let arr=[1,2,3,4,'smit'];
// for(let i=0;i<=4;i++){
//     console.log(arr[i]);
    
// }

//array constructor

// let brr=new Array('smit',1,'patel');
// brr.push("patel");
// brr.pop();
// brr.shift();
// brr.unshift("hello");
// console.log(brr.slice(1,2));
// brr.splice(0,2,"mahesh")
// console.log(brr);

//objects

// let obj={
// name:"smit",
// wight:"72 kg",
// hight:"6 feet",
// greet:function(){
//     console.log("kem chho badha");
// }

// };
// console.log(obj);
// console.log(typeof(obj));
// obj.greet();

//array
// let n=3;
// let arr=[1,12,10,43,5,"smit"];
// arr.push("patel");
// arr.pop();
// arr.unshift("hello");
// console.log(arr);

// console.log(arr.slice(2,n+1));
// arr.splice(1,3,"mahesh");
// console.log(arr);
// console.log(arr);

//map

// let arr=[10,20,30];
// let ansArray=arr.map((Number)=>{
//     return Number*Number;
// })
// console.log(ansArray);

//filter

// let arr=[12,33,44,46,"krunal"];
// let evenArray=arr.filter((Number)=>{
//     if(Number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(evenArray);

//reduce

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(ans);

//short

// let arr=[1,4,3,54,78,4,2,8];
// arr.sort((a, b) => b - a);
// console.log(arr);
// console.log(arr.indexOf(4));

// let arr = [1, 4, 3, 54, 78, 4, 2, 8];

// let firstEven = arr.find(element => element % 2 == 0);

// console.log(firstEven); // Output: 4

//for iach loop

// let arr = [1, 4, 3, 54, 78, 4, 2, 8];
// let length=arr.length;
// console.log("length is:",length);
// arr.forEach((value,index)=>{
//     console.log("number is:",value,"index is:",index);
// })

let fullname="smit";
for(let n of fullname){
    console.log(n);
}


//question 1
 
let arr=[1,2,3,4,5];
let getsum=(arr)=>{
    let sum =0;
    arr.forEach((value) => {
       sum=sum+value;
    });
    return sum;
}
console.log(getsum(arr));