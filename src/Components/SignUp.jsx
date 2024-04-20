import React, { useState } from "react";
import API from "../Helpers/Apis";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpass, setConpass] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if(!name) alert("Name is required!");
        else if(!email) alert("Email is required!");
        else if(password?.length < 6) alert("Password must be minimum length of 6!");
        else if(conpass !== password) alert("Password and confirm password must be matched!");
        else {
            fetch(API.adminSignup, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            }).then((result) => {
                result.json().then((value) => {
                    if(result.ok){
                        localStorage.setItem('user', JSON.stringify(value));
                        navigate('/');
                    } else{
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
        <div className="container-extra">
            <div className="signup-container">
                <p className="title">Sign Up</p>

                <form className="form" onSubmit={handleSignup}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirm Password" value={conpass} onChange={(e) => setConpass(e.target.value)}/>
                    <button type="submit">Sign up</button>
                </form>
                <p className='login-signup'>Already have an account? <u onClick={() => navigate('/login')}>Login</u></p>
            </div>
        </div>
    );
}
export default SignUp;