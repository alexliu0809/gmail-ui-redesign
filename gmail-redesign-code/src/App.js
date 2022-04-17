import { useLocalContext } from "./context/context.js";
import { Loading, Signin, Home, ErrorPage } from "./components";
import { useEffect } from "react";
import { useMailContext } from "./context/mailcontext.js";
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from "react-router-dom";
import { auth } from "./lib/firebase"
import firebase from "firebase/compat/app"

import { ErrorPageNotFound } from "./components/error/error";
// import { AutoSignIn } from "./components/signin/signin";



function App() {
  // You have to get a specific var, otherwise it returns null
  const { appState, setAppState, autoLogin } = useLocalContext();
  const { allMailStates } = useMailContext();

  const {user_id} = useParams();
  
  useEffect(() => {
    if (appState === 'loading'){
      setTimeout(() => {
        setAppState('home')
      }, 2000)
    }
  })

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
            <ErrorPageNotFound>
            </ErrorPageNotFound>
        }>
        </Route>
        
        <Route path="/id/:user_id" element={
          <div className="App">
          {appState === "signin" && <Signin></Signin>}
          {appState === "loading" && <Loading></Loading>}
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
