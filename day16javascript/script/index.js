// 100 sum
// 1+2+3+4
const str = prompt("enter a number");
const num =Number(str);
function sumOfSeries(a){
// 110/2=55 n*(n+1)
const sum =a * (a + 1);
const sumSeries =sum/2;
documentWrite(sumSeries);
}
function documentWrite(a){
    console.log("I am calling from different function");
    document.write(a);
}
sumOfSeries(num);




// prime number
let isPrime;
const str1 = prompt("enter a number");
const num1 =Number(str1);
for(let j=1; j<num1/2; i++){
console.log(num1 + "%" + j + "=" + (num%j));
if(num % j === 0){
    isPrime=false;
    break;
}else{
  isPrime=true;
}
}

if(isPrime){
    console.log(num1,"is prime");
}else{
    console.log(num1,"is not prime");
}


let count =0;
const str2 = prompt("enter a number");
const num2 =Number(str2);
for(let j=1; j<=num1; i++){


    if(num % j===0){
        count = count + 1;
    }
}
// console.log(count);
if(count === 2){
    console.log(num2, "prime");
}else{
    console.log(num2,"not prime");
}

// loop
// 1.for loop => for of , for in
// syntax
// for(startIndex; EnsIndex; Increment/Decrement){
// block of code
// }
for(let i = 1; i<=50; i++){
    console.log("hello! I'm Balika",i);
}

let number;
for(let i = 0; i<=number; i++){
    if(i%2==0){
        console.log(i+'is a even number');

    }else{
        console.log(i+'is a odd number');
    }
}


// 5 is add and prime

function oddEven(num){
    if(num % 2){
        console.log(num,"even");
    }else{
        console.log(num,"odd");
    }
}
const str3 =prompt("enter the number");
const num3 =Number(str3);


const str9 = 'test abc dadadass';
console.log(str9.length);
for(let i=0; i< str9.length; i++){
    console.log(str9[i]);
}

// console.log(str9[0]);
// console.log(str9 [1]);




