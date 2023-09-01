import React from 'react';
import ReactDOM from 'react-dom/client';
import {AuthContextProvider} from './context/store/auth-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// wrap App inside AuthContextProvider 
// no every component can access AuthContext
root.render(<AuthContextProvider><App /></AuthContextProvider>);
