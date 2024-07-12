let random=Math.random();
let a=prompt("Enter The First Number");
let b=prompt("Enter The Second Number");
let c=prompt("Enter The operation");
//pelli rit
// let obj={
//     "+":"-",
//     "-":"/",
//     "/":"*",
//     "*":"+"
// }
console.log(random);

if(random>0.1){
    function add(a,b){
        console.log(a+b);
     }
     function sub(a,b){
         console.log(a-b);
     }
     function mult(a,b){
         console.log(a*b);
     }
     function div(a,b){
         console.log(a/b);
     }
    switch(c){
        case '+':
            add(a,b);
            break;
            case '-':
                sub(a,b);
                break;
                case '*':
                    mult(a,b);
                    break;
                    case '/':
                        div(a,b);
                        break;
    }
// alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
c=obj[c];
function add(a,b){
    console.log(a-b);
}
function sub(a,b){
    console.log(a/b);
}
function mult(a,b){
    console.log(a+b);
}
function div(a,b){
    console.log(a*b);
}
// alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
switch(c){
    case '+':
        add(a,b);
        break;
        case '-':
            sub(a,b);
            break;
            case '*':
                mult(a,b);
                break;
                case '/':
                    div(a,b);
                    break;
}
 }
