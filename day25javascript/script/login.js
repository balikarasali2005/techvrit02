const email=document.getElementById('email');
const password=document.getElementById('password');

const loginBtn= document.getElementById('login-btn');
loginBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    // console.log(email.value)
    // console.log(password.value)
    let data={
        email:email.value,
        password:password.value
    }
      // change object to jcon using JSON.stringify methos
    async function loginform(){
        const resp = await  fetch(' https://backend-mu-pied.vercel.app/users/login',{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(data)
        });
        const loginResp =await resp.json();
        if(loginResp.status){
          console.log(loginResp);
        }else{
            document.getElementById('error-message').innerText=loginResp.message;
        }
           }
           loginform(); 
        })
        