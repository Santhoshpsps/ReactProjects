import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const initialState ={
  value:'',
  isValid:null
}
const emailReducer= (prevState, action)=>{
  if(action.type === 'USER_IN'){
    return{value: action.val , isValid: action.val.includes('@')};
  }
  if(action.type === 'USER_BLUR'){
    return{value: prevState.value , isValid: prevState.value.includes('@')};
  }
  return{value:'',isValid:false};
  }

  const passReducer= (prevState, action)=>{
    if(action.type === 'USER_IN'){
      return{value: action.val , isValid: action.val.trim().length>6};
    }
    if(action.type === 'USER_BLUR'){
      return{value: prevState.value , isValid: prevState.value.trim().length>6};
    }
    return{value:'',isValid:false};
    }

const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passState, dispatchpass] = useReducer(passReducer, initialState);


  const {isValid: emailisValid} = emailState;
  
  const {isValid: passisValid} = passState;
  //useEffect runs only after the rendering of components. if deps array given, it checks for any changes in elements in the array.
  useEffect(()=>{

    const timer = setTimeout(()=>{
      console.log('inside useEffect')
      setFormIsValid(
        emailisValid && passisValid
      );
    }, 500);
    //cleanup function runs after every update
    return function cleanup(){
      console.log('cleanup')
      clearTimeout(timer);
    }
  },[emailisValid,passisValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_IN', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchpass({ type: 'USER_IN', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'USER_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchpass({ type: 'USER_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
