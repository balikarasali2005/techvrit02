const signupHandler = async(event)=>{
    event.preventDefault();
  const fullName=document.querySelector('#fullName').value;
  const email=document.querySelector('#signup-email').value;
  const password=document.querySelector('#signup-password').value;

  const data={
    fullName:fullName,
    email:email,
    password:password,
  }
 const resp = await  fetch('https://backend-mu-pied.vercel.app/users/register',{
    method:"POST",
    body:JSON.stringify(data),
    headers: {
        'Content-Type':'application/json'
    },
 })

const signupResp = await resp.json();
if(signupResp.status){
window.location.href="./login.html";
}else{
document.getElementById('error-msg').innerText=signupResp.message;
}
} 
