import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check that the user is already logged in
  // it will also run when we refresh the page.
  useEffect(() =>{
    if(localStorage.getItem('isLoggedIn') === '1'){ 
      setIsLoggedIn(true);
    }
  },[]);

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

  return (
    // Wrap all component inside AuthContext so that they can acess the data
    // Provider will make it component
    // value is provided by react to change values which are stored in context
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
      <MainHeader onLogOut={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {/*Display Home after login */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>  
  );
}

export default App;
