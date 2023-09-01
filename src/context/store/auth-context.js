import React from "react";

// we can return anything we want 
// here we are creating an object 
const AuthContext = React.createContext({
        isLoggedIn : false
    });

export default AuthContext;