// conditional statement->comparison operator
// if else  condition
// syntax
// if(condition){
    // block of code
// }
// else{
    // next block of code
// }

// let age = 17;
// if(age >= 18){
//     alert('Eligible to drink for age'+ age);
// }else{
//     alert('not Eligible to drink for age'+ age);
// }


// let email= 'abc@gmail.com';
// let email = prompt('enter your email')
// let password;
// if(!email || !password){
//     console.log('please enter an email and password to continue');
// }else{
//     console.log(email);
// }


// let emails = prompt('enter your email')

// prompt= mar(ks => 80 greater -distinction >70<80(first div) >65<70(second div) >45 <65 (third div) >0 <40 fail -1 (not a valid marks)
// if i enter 77 output should be in console - marks 77 is odd and  it is first division
// if i enter 80 output should be in console - marks 80 is even and  it is distinction


const marks = prompt('enter your marks ');
// console.log(typeof marks)
const num = Number(marks);

let message;
if(num % 2 == 0){
    message = 'even';
}else{
    message='odd';
}

if(num >= 80 && num<=100){
    console.log('Marks' + num + ' is ' + message +  ' and it is   Distinction');
}else if(num >=70 && num<80){
console.log('Marks' + num + ' is ' + message + ' and it is first division')
}else if(num >=65 && num<70){
    console.log('Marks' + num + ' is ' + message + ' and it is second division')
    }else if(num >=40 && num<65){
        console.log('Marks' + num + ' is ' + message + ' and it is third division')
}else if(num >=0 && num<40){
    console.log('Marks' + num + ' is ' + message + ' and it is fail')
    }else{
        console.log(' marks doesnot exist')
    }



    // FUNCTIONs=>block of code which solved specific problem
// declare function
//1 camel case=>use in javascript
// let firstName;
// let lastName;
//2 pascal case=>use in react
// let FirstName;
// let LastNameTest;
 

// function declaration /syntax
// function functionName(){
    // block of code 
// }
// function call
// functionName()
function sum(){
    let x =10;
    let y=20;
    let z=30;
    console.log(x+y+z);
}
sum();