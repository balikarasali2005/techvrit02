console.log("hello world");
// syntax,Declaring Variables, Data Types
//var,let,const
var VariableName;
var a;
var b;
var tentabc;

let test;
const cd = 1;

//8 Data Type
// 1.Number 1,2,3,4,5
let num = 2;
console.log(num, typeof num);

// 2.string
let str = "Hi My name balika";
const str1 = "2";
console.log(str1, typeof str1);
console.log(str, typeof str);
// 3.Boolean
let bool = true;
let bool2 = false;
console.log(bool, typeof bool);

// 3.undefined
let notDef;
console.log(typeof notDef);

// 4.null
let abc=null;
console.log(typeof abc);
// 6.BigInt 7.Symbol
// 8.Object
// key:value pair
let student1={
    name:"balika",
    age:18,
    rollNo:26,
    isPresent:false
}
console.log(student1, typeof student1);

console.log(student1.name, typeof student1.name);
console.log(student1.age, typeof student1.age);
// Array
let newArr=[1,2,3,4,5]
console.log(newArr);
let students=['ram','sita']
console.log(students);
let data=[1, 'str',true,false,-99]

let newArObj =[student1,{
    test:'123'
},true,false,{
    data:123
}]
console.log(typeof newArObj);


// operators
// 1.arithmetic operators
const num1 =10;
const num2=30;
const sum =num1 + num2;
console.log('sum',sum);

const sub =num1 - num2;
console.log('sub', sub);

const mul =num1 * num2;
console.log('mul',mul);

const div=num1 / num2;
console.log('div', div);

const rem =num1 % num2;
console.log('rem',rem);


const exponential =2 ** 4;
console.log('exponential',exponential)

let num3=20;
let num4=30;
num3++
console.log(num3)
num4--
console.log(num4)

//2. Assignment Operator
let y = 10;
let z = 30;
// z = z + 30
z += 30;
console.log('z', z)
// z = z - 10
z -= 10;
console.log('z', z)
