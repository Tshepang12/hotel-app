import { useState } from 'react';
import './Login.css'
import {auth} from '../FireBase';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';



function Login () {


    const navigate =useNavigate();

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");





const register =()=>{
    signInWithEmailAndPassword(auth,email,password)

    navigate('/home')
    .catch(error=>console.error(error))
}

    return (
    <div className="loginbox">

        <h1>Login</h1>

            
        <br></br>
      <label className='label'>E - mail</label>
        <input type="text" placeholder="Enter your email"   onChange={(event)=>setEmail(event.target.value)}/> 
        <br></br>

        <label className='label'>Passwords</label>
        <input type="text" placeholder="Enter your password"   onChange={(event)=>setPassword(event.target.value)} />
                    
<br></br>
<p>By creating an account you agree to Conditions of use and Privacy Notice</p>
        <button onClick={register}>Login</button>
      

    
    
<br></br>

<p className='forgot-password text-right'>
    <link to={"/forgot"}></link>

                    </p>

    </div>


          
    )
}

export default Login