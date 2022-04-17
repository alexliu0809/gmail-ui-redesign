import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../lib/firebase"
// shared environment
const UserContext = createContext();

export function useLocalContext(){
    return useContext(UserContext)
};

// Todos: Add firebase tracking to via; more emails; format time; polish

// accepts an arg: children
export function ContextProvider({ children }){
    /**  Only turn off for debug **/
    let autoLogin = false;
    
    const [appState, setAppState] = useState("signin");
    const [currentUser, setCurrentUser] = useState('');

    
    const [drawerOpen, setdrawerOpen] = useState(true);
    const [activeSideBarTab, setactiveSideBarTab] = useState("Inbox");
    const [composeOpen, setcomposeOpen] = useState(false);
    const [activeMainTab, setactiveMainTab] = useState("Primary")
    const [ showVia, setshowVia ] = useState(false);
    const [ viaAnchor, setviaAnchor ] = useState(null);

    const value = {
        currentUser,
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
        autoLogin
    };

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}