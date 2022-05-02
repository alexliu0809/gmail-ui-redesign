import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../lib/firebase"
// shared environment
const UserContext = createContext();

export function useLocalContext(){
    return useContext(UserContext)
};

// accepts an arg: children
export function ContextProvider({ children }){
    /**  Only turn off for debug **/
    const [autoLogin, setAutoLogin] = useState(true);

    const [appState, setAppState] = useState("signin");
    const [currentUser, setCurrentUser] = useState('');

    
    const [drawerOpen, setdrawerOpen] = useState(true);
    const [activeSideBarTab, setactiveSideBarTab] = useState("Inbox");
    const [composeOpen, setcomposeOpen] = useState(false);
    const [activeMainTab, setactiveMainTab] = useState("Primary")
    const [ showVia, setshowVia ] = useState(false);
    const [ viaAnchor, setviaAnchor ] = useState(null);

    let viaRandomDomain = "host@r1xaz.xyz";
    

    const value = {
        currentUser,
        setCurrentUser,
        appState,
        setAppState,
        drawerOpen, 
        setdrawerOpen,
        activeSideBarTab, 
        setactiveSideBarTab,
        composeOpen,
        setcomposeOpen,
        activeMainTab, 
        setactiveMainTab,
        showVia, 
        setshowVia,
        viaAnchor, 
        setviaAnchor,
        autoLogin,
        setAutoLogin,
        viaRandomDomain,
    };

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}