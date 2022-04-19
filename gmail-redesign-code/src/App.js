import { useLocalContext } from "./context/context.js";
import { Loading, Signin, Home, ErrorPage } from "./components";
import { useEffect } from "react";
import { useMailContext } from "./context/mailcontext.js";
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from "react-router-dom";
import { auth } from "./lib/firebase"
import firebase from "firebase/compat/app"

import { ErrorPageNotFound, ErrorNoID, ErrorScreenTooSmaller } from "./components/error/error";
// import { AutoSignIn } from "./components/signin/signin";

const isDesiredUserID = (user_id)=>{
  if (user_id === "test"){
    return true;
  }
 
  const parsed = parseInt(user_id);
  if (!isNaN(parsed) && (parsed >= 0) && (parsed <= 100)) { 
    return true; 
  }
  return false;
}

const GenApp = ( {appState} ) => {
  let user_id = useParams();
  if (isDesiredUserID(user_id.user_id)){
    return (
      <div className="App">
        {appState === "signin" && <Signin></Signin>}
        {appState === "loading" && <Loading></Loading>}
        {appState === "home" && <Home></Home>}
      </div>
    )
  } else {
    return (
      <Navigate replace to="/idnotexist" />
    )
  } 
  
}

const isSmall = () => {
  let isWidthTooSmall = window.innerWidth<=1000;
  let isHeighTooSmall = window.innerHeight<=550;
  console.log(window.innerWidth, window.innerHeight)
  if (isWidthTooSmall || isHeighTooSmall){
    return true;
  }
}



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

  if (isSmall() === true){
    return <ErrorScreenTooSmaller />
  }

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

        <Route path="/idnotexist" element={
            <ErrorNoID>
            </ErrorNoID>
        }>
        </Route>
        
        <Route path="/id/:user_id" 
          element={<GenApp appState={appState} />}
        >
        </Route>

        <Route path="/*" element={<Navigate replace to="/notfound" />} />

      </Routes>
    </Router>
    
  );
}

export default App;
