import { auth } from "../../lib/firebase"

export const SignUpAndSignIn = (userEmail, userPassword, user_id, appState, setAppState, e = null) => {
    
    if (e !== null){
        e.preventDefault();
    }

    console.log(`Auto Signup With Account ${userEmail}:${userPassword}`)
  
    auth
    .createUserWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      auth.currentUser
        .updateProfile({
          displayName: `Participant ${user_id}`,
        })
        .then(() => {
          console.log(`Auto Signup Success`)
          FirebaseSignin(userEmail, userPassword, user_id, appState, setAppState, null);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log(`Auto Signup Fail, User Exist`)
        FirebaseSignin(userEmail, userPassword, user_id, appState, setAppState, null);
      }
      else{
        console.log(`Auto Signup Failed`, error.message, error.code);
      }
    });
  }
  
const FirebaseSignin = (userEmail, userPassword, user_id, appState, setAppState, e = null) => {
    
    if (e !== null){
      e.preventDefault();
    }
    
    console.log(`Auto Signin With Account ${userEmail}:${userPassword}`)
  
    auth.signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
        console.log(`Auto Signin Success`)
        if (appState === 'signin'){
          setAppState("loading")
        }
    })
    .catch((error) => {
        console.log(`Auto Signin Failed`, error.message, error.code);
    });
  }
  