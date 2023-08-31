import React, { useState, useReducer} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


// this function is automatically called by React, not depend on component
// state contains the prev state values 
// action having the new state values
const emailReducer = (state, action) => {
  
  // after each key stoke this will be checked
  if(action.type === 'EMAIL_INP'){
    return({value:action.val, isValid:action.val.includes('@')});
  }
  
  // checked when user loses focus
  else if(action.type === 'EMAIL_BLR'){
    // getting prev state values 
    return({value:state.value, isValid:state.value.includes('@')});
  }

  else {
    return ({ value: '', isValid:false });
  }
}


const Login = (props) => {

  // useReducer to handle multiple states
  const[emailState, dispatchEmail] = useReducer(emailReducer, 
    { 
      value:'',
      isValid: ''
    });


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);



  const emailChangeHandler = (event) => {
    dispatchEmail({type:'EMAIL_INP',val:event.target.value});
    setFormIsValid(
      emailState.isValid && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  // onBlur methods run when user started inputing the next field
  // it is usefull when user remove focuse without entering anything
  const validateEmailHandler = () => {
    dispatchEmail({type:'EMAIL_BLR'});
  };

  // instantenous validation check, border red if not valid
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
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
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
