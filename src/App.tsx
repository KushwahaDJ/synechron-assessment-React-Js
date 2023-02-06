import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { actionCreators } from './state';
import { RootState } from './state/reducers';


function App() {

  return (
  <Router>
  

<div className="App">
           
           <Routes>
                 <Route  path='/' element={< Login />}></Route>
                 <Route  path='/home' element={< Dashboard />}></Route>
          </Routes>
  </div>
    </Router>
  );
}

export default App;
