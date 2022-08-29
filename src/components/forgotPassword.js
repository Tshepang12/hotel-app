import './Login.css'

import React from 'react'
import {auth} from '../FireBase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';

export default function Forgot() {

    const [email, setEmail] = useState('');

    const forgotPassword = (() =>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Check your email')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    })

    return (
        <form className='loginform'>
            <div className='login'>
                <h1 className='lmove'>Forgot Password</h1>
                <input onChange={(event) => setEmail(event.target.value)} type='' className='rinput' placeholder='Email'></input><br></br>
              
                <button onClick={forgotPassword} className='btnl'>Login</button>
            </div>
        </form>
    )
}