import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/store/auth-context';
import React, {useContext} from 'react';

// only use it display content 
// states are handled inside context
function App() {
  
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {/*Display Home after login */}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>  
  );
}

export default App;
