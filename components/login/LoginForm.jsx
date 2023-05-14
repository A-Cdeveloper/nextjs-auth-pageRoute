import React, { useState, useRef } from 'react';
import classes from './Login.module.scss';
import { registrationUser } from '@/lib/helpers';

const LoginForm = () => {
  const [isUser, setIsUser] = useState(true);
  const [message, setMessage] = useState();
  const entEmail = useRef();
  const entPassword = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const inputEmail = entEmail.current.value;
    const inputPassword = entPassword.current.value;

    if (isUser) {
      // LOGIN
    } else {
      // REGISTER
      try {
        await registrationUser(inputEmail, inputPassword);
        setIsUser(true);
        entEmail.current.value = '';
        entPassword.current.value = '';
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <>
      <h1>{isUser ? 'Login to' : 'Create'} account</h1>
      <form onSubmit={submitHandler} className={classes.loginform}>
        <label htmlFor="email" id="emailLabel">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          aria-labelledby="emailLabel"
          ref={entEmail}
          required
        />
        <label htmlFor="password" id="passwordLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          aria-labelledby="passwordLabel"
          ref={entPassword}
          required
        />
        <button>SEND</button>
        {message && <p className="errormsg">{message}</p>}
        <p onClick={() => setIsUser(!isUser)}>
          {isUser ? 'Create account' : 'Login to your account'}
        </p>
      </form>
    </>
  );
};

export default LoginForm;
