import { Button, TextField } from "@material-ui/core"
import React, { useState } from 'react'
import Signup from '../signup/signup.js'
import { auth } from "../../lib/firebase"
import {ErrorSignUp, ErrorSignIn} from "../error/error"
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useLocalContext } from '../../context/context'
import { SignUpAndSignIn } from "./autosignin"
import './styles.css'

// label: default text; type: Textfield type

// const {user_id} = useParams();
// const [userPassword, setuserPassword] = useState('abcd1234');
// const [userEmail, setuserEmail] = useState(`participant.${user_id}@gmail.com`);
  

const Signin = () =>{
  

    // define a bunch of states, initial state false.
    // setShowSignup is of class SetStateAction
    const [showSignup, setShowSignup] = useState(false);
    const [loadingTime, setloadingTime] = useState(false);

    const { autoLogin, setAppState, appState } = useLocalContext();

    const [emailFormatError, setemailFormatError] = useState('')
    const [passwordWrongError, setpasswordWrongError] = useState({state:false,msg:''})
    
    const {user_id} = useParams();
    const [userEmail, setuserEmail] = useState(`participant.${user_id}@gmail.com`);
    const [userPassword, setuserPassword] = useState('abcd1234');

    useEffect(() => {
      if (autoLogin === true){
        setAppState('loading')
        SignUpAndSignIn(userEmail, userPassword, user_id, appState, setAppState, null)
      }
    }, [])

    // whenever user click on create account, this function is triggered
    const toggleSignup = (e)=>{
        // prevent page from freshing
        e.preventDefault()
        setloadingTime(true)
        setTimeout(()=>{setShowSignup(true);setloadingTime(false)},200); //sleeps 500ms
        //setShowSignup(true)
    };
    
    const firebaseSignin =(e) => {
      SignUpAndSignIn(userEmail, userPassword, user_id, appState, setAppState, e);
    }

    if (autoLogin === true){
      return <></>
    }
    
      // If else statement based on state: {setShowSignup ? () : () }
      return (
        <div className="login">
        {showSignup ? (
            <Signup setShowSignup={setShowSignup} />
        ) : (
        <div className="login__content">
            <div className="login__loading" />

            <div className={`login__wrapping ${loadingTime && "login__fade"}`}>
              <img
                className="login__logo"
                src="/assets/svg/google.svg"
                alt="Google"
              />

              <p className="login__title">Sign in</p>
              <p className="login__subtitle">Continue to Gmail</p>

              <form className="login__form">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  className="login__input"
                  value={userEmail}
                  onChange={(e) => setuserEmail(e.target.value)}
                  error={emailFormatError.state}
                  helperText={emailFormatError.msg}
                />

                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="login__input"
                  type="password"
                  value={userPassword}
                  onChange={(e) => setuserPassword(e.target.value)}
                  error={passwordWrongError.state}
                  helperText={passwordWrongError.msg}
                />

                <div className="login__infoText">
                  Not your computer? Use guest mode to sign in privately?
                  <a href="/learnmore">Learn More</a>
                </div>

                <div className="login__buttons">
                  <Button
                    className="login__button"
                    color="primary"
                    onClick={toggleSignup}
                  >
                    Create Account
                  </Button>

                  <Button
                    className="login__button"
                    color="primary"
                    variant="contained"
                    onClick={firebaseSignin}
                  >
                    Sign in
                  </Button>
                </div>

              </form>

            </div>
          </div>
        )}
    </div>
    )
    
}

export default Signin