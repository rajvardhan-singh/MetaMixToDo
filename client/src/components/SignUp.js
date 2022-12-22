import React, {  useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { signUp } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import classes from './Login.module.css';
import Button from './Button';
 


const SignUp = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [user,setUser]=useState("")
    const [userIsValid,setUserIsValid] =useState(true)
    const [formIsValid, setFormIsValid] = useState(false);
    const [error,setError] = useState(false)
  
    const dispatch = useDispatch()
    const  navigate = useNavigate()
    const isValidSignup = useSelector(state=>state.isValidSignup)
  
    useEffect(()=>{
      if(isValidSignup) navigate('/addtask')
      if( isValidSignup!=null && !isValidSignup) setError(true)
     },[isValidSignup])
  
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
  
      setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6 && user!==""
      );
    }
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
  
      setFormIsValid(
        event.target.value.trim().length > 6 && enteredEmail.includes('@') && user!==""
      );
    };
  
    const validateEmailHandler = () => {
      setEmailIsValid(enteredEmail.includes('@'));
    };
  
    const validatePasswordHandler = () => {
      setPasswordIsValid(enteredPassword.trim().length > 6);
    };
  
    const usernameChangeHandler=(event)=>{
        setUser(event.target.value)
        setFormIsValid(
          event.target.value!=="" && enteredEmail.includes('@') && enteredPassword.trim().length > 6
        )
    }
  
    const validateUsernameHandler=(event)=>{
      setUserIsValid(user!=="")
    }
  
     
  
  
    //on submitting form
    const submitHandler = (event) => {
  
      event.preventDefault();
  
      //api call
      dispatch(signUp({
        email:enteredEmail,
        password:enteredPassword,
        username:user,
        // date:new Date().toDateString()
      })).then(()=>{
        //if valid detail go to add task page
        // if(isValidSignup) {
        //   console.log("inside the component")
        //   navigate('/addtask')
        // }
        // else setError(true)
      })
      
       
  
     // props.onLogin(enteredEmail, enteredPassword);
      
    };



  return (
    <Card className={classes.login}>
    <form onSubmit={submitHandler}>

      <div
        className={`${classes.control} ${
          emailIsValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>

      <div
        className={`${classes.control} ${
          userIsValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={usernameChangeHandler}
          onBlur={validateUsernameHandler}
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
          SignUp
        </Button>
      </div>
      
      {error && 
          <div>
            <h3>Email alredy Exist</h3>
          </div>
      }

    </form>
  </Card>
  )
}

export default SignUp