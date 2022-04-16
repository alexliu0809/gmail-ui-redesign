import { useLocalContext } from "./context/context.js";
import { Loading, Signin, Home, ErrorPage } from "./components";
import { useEffect } from "react";
import { useMailContext } from "./context/mailcontext.js";
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from "react-router-dom";
import { auth } from "./lib/firebase"
import firebase from "firebase/compat/app"

import { ErrorPageNotFound } from "./components/error/error";



function App() {
  // You have to get a specific var, otherwise it returns null
  const { appState, setAppState } = useLocalContext();
  const { allMailStates } = useMailContext();

  const {user_id} = useParams();

  const autoLogin = true;

  //console.log(appState);
  
  useEffect(() => {
    if (appState === 'loading'){
      setTimeout(() => {
        setAppState('home')
      }, 2000)
    }
  })

  // Auto Login
  // if (autoLogin === true && firebase.auth().currentUser !== "hsyalexliu0809@gmail.com"){
  //   auth.signInWithEmailAndPassword("hsyalexliu0809@gmail.com", "abcd1234").then(() => {
  //     console.log("Loggin")        
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //     console.log(err.code)
  //   });      
  // }
  

  // allMailStates.map((mailState, index) => {
  //   console.log("full_id", `/${mailState.state.full_id}`)
  // })

  return (
    <Router>
      <Routes>
        {allMailStates.map((mailState, index) => {
                return <Route key={`${mailState.state.full_id}`} path={`/id/:user_id/${mailState.state.full_id}`} element={
                  <Home mailState={mailState} showMails={false}/>
                }>
                </Route>
        })}

        <Route path="/notfound" element={
          <div className="App">
            <ErrorPageNotFound>
            </ErrorPageNotFound>
          </div>
        }>
        </Route>

        <Route path="/id/:user_id" element={
          <div className="App">
          {appState === "login" &&<Signin></Signin>}
          {appState === "loading" &&<Loading></Loading>}
          {appState === "home" && <Home></Home>}
          </div>
        }>

        </Route>

        <Route path="/*" element={<Navigate replace to="/notfound" />} />

      </Routes>
    </Router>
    
  );
}

export default App;
