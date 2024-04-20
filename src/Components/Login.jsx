import React, { useState } from 'react'
import API from '../Helpers/Apis';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(!email) alert("Email is required!");
        else if(password?.length < 6) alert("Password must be minimum length of 6!");
        else {
            fetch(API.adminLogin, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then((result) => {
                result.json().then((value) => {
                    if(result.ok){
                        localStorage.setItem('user', JSON.stringify(value));
                        navigate('/')
                    }
                    else {
                        alert(value.message);
                    }
                }).catch((error) => {
                    alert(error.message);
                })
            }).catch((error) => {
                alert(error.message);
            })
        }
    }

  return (
    <div className='container-extra'>
        <div className='login-container'>
            <p className="title">Login Form</p>

            <form className="form" onSubmit={handleLogin}>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
            <p className='login-signup'>Don't have an account? <u onClick={() => navigate('/signup')}>Sign up</u></p>
        </div>
    </div>
  )
}

export default Login