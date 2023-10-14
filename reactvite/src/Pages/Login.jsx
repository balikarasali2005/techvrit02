import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
import '../App.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from "../services/toast.sevices";
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate()

function handleChange(e){
  console.log(e)
if(e.target.name ==='email'){
  setEmail(e.target.value)
}else if(e.target.name==="password"){
setPassword(e.target.value);
}
}
  function handleSubmit(e){
    e.preventDefault();
const data={
  email,
  password
};

// apicall
axios
.post('https://backend-mu-pied.vercel.app/users/login',data)
.then((resp)=>{
console.log(resp)


if(resp.data.status){
// navigate->for next pages
localStorage.setItem("isLoggedIn",true)
navigate("/product");
successToast(resp.data.message);

  // toast.success(resp.data.message,{
//     position: "top-left",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "dark",
// });
}

})
.catch((err)=>{
  errorToast(err.response.data.message);

  // toast.error(err.response.data.message,{
//     position: "top-left",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "dark",
// });
});
  }
    return (
    <div className="login p-5"style={{width:"450px"}}>
         <Form>
          <h3>Login Form</h3>
          <AiOutlineUser className="h-50 w-50 mb-2 "/>
      <Form.Group className="mb-3  ms-2" controlId="formGroupEmail">
        <Form.Label className="fw-5">Email Address</Form.Label>
        <Form.Control type="email" 
        name="email"
        placeholder="Enter Email"style={{width:"20rem"}} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3 ms-2" controlId="formGroupPassword">
        <Form.Label className="fw-5">Password</Form.Label>
        <Form.Control type="password" 
        name="password"placeholder="Your Password"  style={{width:"20rem"}}  onChange={handleChange}/>
      </Form.Group>
      <p>Forgot  <a href="#"> Password?</a></p>
      <Button  variant="info" type="submit" onClick={(e)=>handleSubmit(e)}>
        Log-In
      </Button>
      <p className="mt-2">Don't Have An Account? <a href="./SignUp">SignUp</a></p>
            </Form>
    </div>
      )
}
export default Login;
