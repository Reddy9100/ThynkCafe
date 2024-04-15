import React, { useState } from 'react';
import Login from '../Login/Login';
import "./signUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [showPass, setPassSeen] = useState(false);
    const [loginstate, setLoginState] = useState(false);

    const SignUpForm = async (event) => {
        event.preventDefault();
        let signUpUrl = "http://localhost:8000/signUp";
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ name, mail, pass }),
        };

        try {
            let response = await fetch(signUpUrl, options);
            let data = await response.json()
            if (response.ok === true) {
                alert(data.message)
                setLoginState(true);
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error("Error during sign-up:", error.message);
        }
        setMail("")
        setName("")
        setPass("")
    };

    const controlledInputSignUpName = (event) => {
        setName(event.target.value);
    };

    const controlledInputSignUpMail = (event) => {
        setMail(event.target.value);
    };

    const controlledInputSignUpPass = (event) => {
        setPass(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setPassSeen(!showPass);
    };

    const showLogin = () => {
        setLoginState(true);
    }

    return (
        <div className='signup-con'>
            
                {!loginstate ? (
                    <>
                    <div className='inner-signup'>
                        <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1703002961~exp=1703003561~hmac=40ed89ec2e915a4b47c3271956427204af414c9561f86d2aebd2132ce631e0ad' className='signUp-image' alt='signupimage' />
                        <form className='form-con' onSubmit={SignUpForm}>
                            <h1 className='thynk-head'>ThynkCafe</h1>
                            <h1 className='signup-head'>SignUp</h1>
                            <label htmlFor="text"><b>Name</b></label>
                            <input type='text' className='text-feild form-control mt-2' id='text' placeholder='Enter Your Name' onChange={controlledInputSignUpName} value={name} />
                            <br />
                            <label htmlFor="mail"><b>Email</b></label>
                            <input type='email' className='email-feild form-control' id='mail' placeholder='Enter Your Mail' onChange={controlledInputSignUpMail} value={mail} />
                            <br />
                            <label htmlFor="pass"><b>Password</b></label>
                            <input
                                type={showPass ? 'text' : 'password'}
                                className='password-feild form-control'
                                id='pass'
                                placeholder='Enter Your Password'
                                onChange={controlledInputSignUpPass}
                                value={pass}
                            />
                            <i className="bi bi-eye-fill eye-icon" onClick={togglePasswordVisibility}></i>
                            <br />
                            <button className='btn btn-primary' type='submit'>SignUp</button>
                            <p className='mt-3 para-signup'>Already a User<span className='ml-3 span' onClick={showLogin}>Login</span></p>
                        </form>
                        </div>
                    </>
                ) : (
                    <Login />
                )
                }
                 {
            }
            </div>
    );
   
}

export default SignUp;
