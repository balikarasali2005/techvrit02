// arrow function
// string transver
const str ='abscr'
let reverString;
for(let i= str.length-1; i >=0;i--){
console.log(reverString, i)
reverString = reverString + str[i];
// or
// reverString +=str[i];
}
console.log(`original string is ${str} and reverstring ${reverString}`)
if(str === reverString)
{
    console.log(`${str} is a palindrome`)
}else{
    console.log(`${str} not palindrome`)
}

// array loop
const arr=["ram","sita","test"];
// first way to loop inside array=>for loop
const length=arr.length;
for(let i = 0; i< length;i++){
    console.log(arr[i])
}
// second way to loop inside array=>for of loop
// for (variable of arr)
console.log('---for of method below--')
const number =[1,2,3,4,5,6,7,8,9];
for(let item of number){
    console.log(item)
}
// Array Methods
// 1.lenght()
console.log(number.length);
//2. push() - add a new element to an array (end)
number.push(22); 
number.push(23); 
console.log(number)
//3. pop() remove a new element to an array (end)
number.pop();
number.pop();
console.log(number)
//4. unshift - add a new element toan array (begining)
number.unshift("new data add");
console.log(number)
//5. shift-> remove a new element to an array (begining)
number.shift();
number.shift();
number.shift();
console.log(number);

// concat---merge two array 
const concatAaray= arr.concat(number);
// const second =[...arr,...number]
console.log(concatAaray);

// return
function sum(a,b){
 return(a+b);
}
const s= sum(1,2);
console.log(s);
// 6.sort()
// const student=["sahin","samaye","aayush","prasanna"]
const nums=[55,77,22,1,4]
const sortNumber = nums.sort(function(a,b){
    return a-b;
})
console.log(`${sortNumber[0]}is our maximum`);
console.log(`${sortNumber[sortNumber.length-1]}is our maximum`);

// console.log(student.sort());
// 7.join
// 8.reverse()
const test = ['1','2','3']
// const reverseArray=[]
// for(let i=test.length-1;i>=0;i--){
// reverseArray.push(test[i])
// }
console.log(test.reverse());

// EcmaScript - Js standard
// ES5 ->2015 ES6->use let sonst instead of var
// javascript vs typecript vs EcmaScript

// arrow function
const subtraction = ()=>{}
    const summ=(a,b)=>{
        return a+b
    }
sum(1,3);
