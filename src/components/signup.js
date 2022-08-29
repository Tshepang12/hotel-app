import { useState } from 'react';
import './Login.css'
import {auth} from '../FireBase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword} from 'firebase/auth';



function Signup () {


    const navigate =useNavigate();

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[phone,setPhone] = useState("");
const[firstname,setFirstName] = useState("");
const[lastname,setLastName] = useState("");





const register = ()=>{
    createUserWithEmailAndPassword(auth,email,password,firstname,phone,lastname)


    .then(auth=>console.log(auth))
    .catch(error=>console.error(error))
    navigate('/login')

} 


    return (
    <div className="loginbox">

        <h1>Signup</h1>

            
        <br></br>
      <label className='label'>first Name</label>
        <input type="text" placeholder="Enter your email"   onChange={(event)=>setFirstName(event.target.value)}/> 
        <br></br>

        <label className='label'>Last Name</label>
        <input type="text" placeholder="Enter your password"   onChange={(event)=>setLastName(event.target.value)} />
                    
<br></br>
<label className='label'>Phone</label>
        <input type="text" placeholder="Enter your password"   onChange={(event)=>setPhone(event.target.value)} />
                    
<br></br>
<label className='label'>E -MAIL</label>
        <input type="text" placeholder="Enter your password"   onChange={(event)=>setEmail(event.target.value)} />
                    
<br></br>
<label className='label'>Password</label>
        <input type="text" placeholder="Enter your password"   onChange={(event)=>setPassword(event.target.value)} />
                    
<br></br>
        
        <p>By creating an account you agree to Conditions of use and Privacy Notice</p>

        <button onClick={register}>Signup</button>
        <br></br>
    
<br></br>

<p className='forgot-password text-right'>
    <link to={"/forgot"}></link>

                    </p>

    </div>


          
    )
}
export default Signup