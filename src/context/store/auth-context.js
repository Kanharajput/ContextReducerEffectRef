import React from "react";
import { useEffect, useState } from 'react';

// we can return anything we want 
// here we are creating an object 
const AuthContext = React.createContext({
    // dummy function there functionality is provided by provider
        isLoggedIn : false, 
        onLogIn: (email, pass) => {},
        onLogout: () => {}
    });

    // export via variable
export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // check that the user is already logged in
    // it will also run when we refresh the page.
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // save to local storage of after refreshing of the page 
        // we can check this data to known user was loggedIn or not
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        // remove the saved loggedIn status
        localStorage.removeItem('isLoggedIn');
    };

    return(
        <AuthContext.Provider 
          value={{
            isLoggedIn:isLoggedIn, 
            onLogout:logoutHandler, 
            onLogIn:loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;