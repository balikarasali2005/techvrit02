import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { errorToast, successToast } from "../services/toast.sevices";
const SignUp = () => {
  const[fullName,setFullName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate()

const handleChangeSignUp=()=>{
if(e.target.name==="fullName"){
  setFullName(e.target.value);
}else if(e.target.name ==="email"){
  setEmail(e.target.value);
}else if(e.target.name === "password"){
  setPassword(e.target.value)
}
}
  const  handleSignUp = async (e) =>{
    navigate('/login')
    e.prevenDefault();
    const data={
      fullName,
      email,
      password
    }
axios.post(" https://backend-mu-pied.vercel.app/users/register",data).then((resp)=>{
  console.log(resp)
}).catch((error)=>{
  
})
}

//  try {
//       const resp = await axios.post(
//         "https://backend-mu-pied.vercel.app/users/register",
//         data
//       );

//       if (resp.data.status) {
//         navigate('/login');
//         successToast(resp.data.message);
//       }
//     } catch (err) {
//       errorToast(err.response.data.message);
//     }
//   };

  return (
    <>
      <div className="signup p-5">
        <Form>
          <h3 className="mb-4">CREATE ACCOUNT</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-5">Full-Name</Form.Label>
            <Form.Control type="text" placeholder="Enter FullName"name="fullName" style={{ width: "20rem" }} onClick={handleChangeSignUp}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-5">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"name='email' style={{ width: "20rem" }} onClick={handleChangeSignUp}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="fw-5">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"name='email' style={{ width: "20rem" }}onClick={handleChangeSignUp} />
          </Form.Group>
          <Button variant="success" type="submit" onClick={(e)=>handleSignUp(e)}>
            Sign-In
          </Button>
          <p className="mt-4">Already Have Account? <a href="Login">LogIn</a></p>
        </Form>
      </div>
    </>
  )
}

export default SignUp;
