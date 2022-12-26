import React, {  useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Card from './Card';
import classes from './Login.module.css';
import Button from './Button';
import { logIn } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredUser,setEnteredUser]=useState("")
  const [userIsValid,setUserIsValid] =useState(true)
  const [formIsValid, setFormIsValid] = useState(false);

  const [error,setError] = useState(false)

  const dispatch = useDispatch()
  const  navigate = useNavigate()
  const isValidLogin = useSelector(state=>state.isValidLogin)

  // useEffect(()=>{
  //   if(!isValidLogin){
  //     setError(true)
  //   }
  // },[isValidLogin])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6 && enteredUser!==""
    );
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@') && enteredUser!==""
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const usernameChangeHandler=(event)=>{
      setEnteredUser(event.target.value)
      setFormIsValid(
        event.target.value!=="" && enteredEmail.includes('@') && enteredPassword.trim().length > 6
      )
  }

  const validateUsernameHandler=(event)=>{
    setUserIsValid(enteredUser!=="")
  }

  const signUpHandler=()=>{
    navigate('/signup')
  }


  //on submitting form
  const submitHandler = (event) => {

    event.preventDefault();

    //api call
    dispatch(logIn({
      email:enteredEmail,
      password:enteredPassword,
      username:enteredUser,
      // date:new Date().toDateString()
    })).then(()=>{

      //if valid detail go to add task page
      if(!isValidLogin) navigate('/addtask')
      else setError(true)
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
            value={enteredUser}
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
            Login
          </Button>
        </div>

        <div className={classes.actions}>
          <Button type="button" className={classes.btn} onClick={signUpHandler}>
            SignUp
          </Button>
        </div>
        
        {error && 
            <div>
              <h3>Sorry,wrong detail entered!</h3>
            </div>
        }

      </form>
    </Card>
  );
};

export default Login;