import React, { useState } from 'react'
import { useContext } from 'react';
import {NavLink, useNavigate} from "react-router-dom"
import '../css/login.css'
import axios from 'axios';
import { useUsername } from './UsernameContext';


const Auth=()=> {
    const { setUsername } = useUsername();
    const navigate = useNavigate();
    const [form,setForm]=useState({});
    const [errorMessage, setErrorMessage] = useState('');
    axios.defaults.withCredentials=true;

    const logInForm =(e)=>{
        console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const signInForm=async(e)=>{
        
        e.preventDefault();
        
        const response=await fetch('https://text-tool-kit-backend.vercel.app/signin',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json',
            }
        })

        if (response.ok) {
            const data = await response.json();
            const name = data.userExists;
            console.log(data)
      
            if (data) {
                setUsername(data);
                console.log("Log In Successfully");
                navigate('/home'); // Change this to your home page route
            } else {
              setErrorMessage('User not found'); // Display error message
            }
          }
        else 
        {
            setErrorMessage('Login failed'); // Display error message
        }


        // const data=await response.json();
        // const name=data.userName;
        
        // console.log("Log In Successfully"); // show that the 

        // setUsername(name);
        // console.log(response); // show that the connet with backend server localhost
        // console.log(form); //form data print


    }


  return (
    <>

<div className='logincss' style={{ marginTop: '60px'}}>
        <div id="card">
            <div id="card-content">
            <div id="card-title">
                <h2>USER LOGIN</h2>
                <div className="underline-title"></div>
            </div>
            <p style={{ color: 'red', fontSize:'13px' }}>{errorMessage}</p>                

            <form onSubmit={signInForm} className="form">

                <div className="form-group">
                <label className="form-control-label" htmlFor="username" style={{paddingTop:'13px'}}>
                    &nbsp;Email
                </label>
                <input onChange={logInForm} id="username" name='userName' className="form-control form-content" type="email" autoComplete="on" required />
                </div>
                <div className="form-border"></div>


                <div className="form-group">
                <label htmlFor="password" style={{paddingTop:"22px"}}>&nbsp;Password</label>
                <input id="password" onChange={logInForm}  className="form-control form-content" type="password" name="userPassword" required />
                <div className="form-border"></div>                
                <legend id="forgot-pass">Forgot password?</legend>
                
                </div>

                <input id="submit-btn" type="submit" name="submit" value="Log In" />
                <NavLink id="signup" style={{display:'inline', fontSize:'16px'}}  className="nav-link" to="/signup">Don't have account yet?</NavLink>

            </form>
            </div>
        </div>

        
    </div>
    </>
  )
}

export default Auth;
