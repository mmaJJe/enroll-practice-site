import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home';
import Enroll from './components/Enroll/Enroll'


function App() {
  return (
      <div className="App">
        <div className="ContentBox">
            <NavBar/>
            <div className="Content">
              <Route path="/" exact={true} component={Home} />
              <Route path="/enroll" component={Enroll} />
            </div>
        </div>
      </div>
    
  );
}

export default App;
