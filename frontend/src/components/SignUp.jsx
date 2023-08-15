import React, { useState } from 'react'
import {NavLink , useNavigate} from "react-router-dom"
import axios from 'axios';
import '../css/signup.css'
// import axios from 'axios';


const SignUp=()=> {
    const navigate = useNavigate();
    const [form,setForm]=useState({});
    const [passwordError, setPasswordError] = useState('');
    axios.defaults.withCredentials=true;


    const newForm =(e)=>{
        console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const validatePassword = () => {
        const password = form.userPassword || '';
        const confirmPassword = form.userConfirmPassword || '';

        if (password === '' || confirmPassword === '') {
            setPasswordError('Passwords cannot be empty');
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters.');
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const signUpForm=async(e)=>{
        
        e.preventDefault();
        validatePassword();
        
        const response=await fetch('https://text-tool-kit-backend.vercel.app/signup',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json',
        }
        })

        if (response.ok) {
            const data = await response.json();
            const name = data.result;
            console.log(data.userName);
            // navigate('/signin');
        }
        else{
            console.log("Sign Up Failed")
        }
    }
    
  return (
    <>
    <div style={{ marginTop: '60px'}}>
        <div id="card">
            <div id="card-content">
            <div id="card-title">
                <h2>REGISTER</h2>
                <div className="underline-title"></div>
            </div>
            <form onSubmit={signUpForm} className="form">

                <div className="form-group">
                <label className="form-control-label" htmlFor="username" style={{paddingTop:'13px'}}>
                    &nbsp;Email
                </label>
                <input onChange={newForm} id="username" name='userName' className="form-control form-content" type="email" autoComplete="on" required />
                </div>
                <div className="form-border"></div>


                <div className="form-group">
                <label htmlFor="password" style={{paddingTop:"22px"}}>&nbsp;Password</label>
                <input id="password" onChange={newForm}  className="form-control form-content" type="password" name="userPassword" required />
                <div className="form-border"></div>
                <p style={{ color: 'red', fontSize:'13px' }}>{passwordError}</p>                
                </div>

                <div className="form-group">
                <label htmlFor="confirmPassword" style={{paddingTop:"22px"}}>&nbsp;Confirm Password
                </label>
                <input id="confirmPassword" onChange={newForm} className="form-control form-content" type="password" name="userConfirmPassword" required />
                <div className="form-border"></div>
                <p style={{ color: 'red', fontSize:'13px' }}>{passwordError}</p>
                </div>

                <input id="submit-btn" type="submit" name="submit" value="Create Account" />
                <NavLink id="signup" style={{display:'inline', fontSize:'16px'}}  className="nav-link" to="/signin">Already have an account?</NavLink>
            </form>
            </div>
        </div> 
    </div>

    </>
  )
}

export default SignUp;
