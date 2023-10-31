import './App.css'
import { Student,User } from './interface/student.interface';
function App() {
  // let num:string= "hello";
  // let numb :number=10

  // interface:define the whole object;
// interface Student{
//   name:string;
//   isAttended : boolean;
//   address:AddressInterface;
// }
// interface AddressInterface{
//   city:string;
//   postalCode:number
// }

let student:Student ={
  name:"ram",
  isAttended : false,
  address :{
    city:"KTM",
    postalCode:44600,
  },
}
const user:User={
  id:1,
  name:"abc"
}

const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];


const users:User[] = [
  {id:1, name:"ram"},{id:2,name:"shyam"},
];

  return (
    <>
     
    </>
  )
}

export default App;
