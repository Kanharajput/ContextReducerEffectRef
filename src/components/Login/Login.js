import React, { useState, useReducer, useEffect, useContext, useRef} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/store/auth-context';
import Input from './../UI/Input/Input';


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


const passReducer = (state, action) =>{
  if(action.type === 'PASS_INP'){
    return({value: action.val, isValid: action.val.trim().length > 6})
  }

  else if(action.type === 'PASS_BLR'){
    return ({ value: state.value, isValid: state.value.trim().length > 6})
  }

  else{
    return ({value:'', isValid: false});
  }
}

const Login = () => {

  // useReducer to handle multiple states
  const[emailState, dispatchEmail] = useReducer(emailReducer, 
    { 
      value:'',
      isValid: null
    });


  const [passState, dispatchPass] = useReducer(passReducer, 
    {
      value:'',
      isValid: null,
    });


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  // get the valid variable from state
  const{isValid: isEmailValid} = emailState;
  const{isValid: isPassValid} = passState;

  // only runs when the validity changes
  useEffect(() =>{
    const timer = setTimeout(() => {
      if (emailState.isValid && passState.isValid) {
        setFormIsValid(true);
      }
      else {
        setFormIsValid(false);
      }
    }, 500);

    return (() =>{
      clearTimeout(timer);
    });
  }, [isEmailValid, isPassValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type:'EMAIL_INP',val:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type:'PASS_INP',val:event.target.value});
  };

  // onBlur methods run when user started inputing the next field
  // it is usefull when user remove focuse without entering anything
  const validateEmailHandler = () => {
    dispatchEmail({type:'EMAIL_BLR'});
  };

  // instantenous validation check, border red if not valid
  const validatePasswordHandler = () => {
    dispatchPass({type: 'PASS_BLR'});
  };

  // context instance
  const ctx = useContext(AuthContext);

  // create the useRef
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogIn(emailState.value, passState.value);
    }
    else if(!isEmailValid){
      // focus is exskfsskfkjd
      emailInputRef.current.focus();
    }
    else{
      passwordInputRef.current.focus();
    }
  };


  // actia

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          state={emailState} 
          onChange={emailChangeHandler} 
          onBlur={validateEmailHandler} 
          type={"email"}
          id={"email"}
          label={"Email"}
          />
        <Input 
          ref={passwordInputRef}
          state={passState} 
          onChange={passwordChangeHandler} 
          onBlur={validatePasswordHandler} 
          type={"password"}
          id={"password"}
          label={"Password"}
          />        
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
