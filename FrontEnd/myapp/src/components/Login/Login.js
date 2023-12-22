import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Login.css';

const Login = () => {
  const history = useNavigate();
  const [passLogin, setPassLogin] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passType, setChangePass] = useState(false);
  const [loading, setLoading] = useState(false);
  const[count,setCount] = useState(0)

  useEffect(() => {
    setCount((prev)=> prev+1)
  }, [count]); 

  const alertgen = () =>{
     setTimeout(()=>{
      alert("Login SuccessFull")
    },1000)
  }
  const loginSubmission = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const loginUrl = 'http://localhost:8000/login';
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ passLogin, emailLogin }),
    };

    try {
      const response = await fetch(loginUrl, options);
      const data = await response.json();

      if (response.ok) {
        alert("Fetching Data Try again")
        alertgen()
        console.log(`Jwt_token : ${JSON.stringify(data.token)}`);
        onSuccessfullLogin(data.token);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSuccessfullLogin = (token) => {
    Cookie.set('jwt_token', token, { expires: 30 });
    history('/');
  };

  const changeEmail = (event) => {
    setEmailLogin(event.target.value);
  };

  const changePassword = (event) => {
    setPassLogin(event.target.value);
  };

  const changePassType = () => {
    setChangePass(!passType);
  };

  let jwtToken = Cookie.get('jwt_token');
  if (jwtToken === undefined) {
    history('/login');
  }

  return (
    <>
      <div className='Login-con'>
        <div className='inner-login'>
          <form onSubmit={loginSubmission} className='form-login'>
            <h1 className='login-head'>Login</h1>
            <br />
            <label htmlFor='emailLogin'>
              <b>Email</b>
            </label>
            <input
              type='text'
              placeholder='Enter Your Registered Mail'
              id='emailLogin'
              onChange={changeEmail}
              className='email-feild-login form-control'
              value={emailLogin}
            />
            <br />
            <label htmlFor='passLogin'>
              <b>Password</b>
            </label>
            <input
              type={passType ? 'text' : 'password'}
              className='email-feild-login form-control'
              placeholder='Enter Password'
              value={passLogin}
              id='passLogin'
              onChange={changePassword}
            />
            <i
              className={`bi ${
                passType ? 'bi-eye' : 'bi-eye-slash'
              } eye-login`}
              onClick={changePassType}
            ></i>
            <br />
            <button className='btn btn-success popping' type='submit' disabled={loading}>
              {loading ? (
                <Loader type='ThreeDots' color='Blue' height={25} width={50} />
              ) : (
                'Click Until Login'
              )}
            </button>
          </form>
          <img
            src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1703003048~exp=1703003648~hmac=0ac42230b3171c54e4b939760f73c4f56492b348f28e172222c164e142312377'
            className='login-image'
            alt='loginimage'
          />
        </div>
      </div>
    </>
  );
};

export default Login;
