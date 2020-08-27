import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home';
import Enroll from './components/Enroll/Enroll'
import Chatting from './components/Chatting/Chatting'

import { EnrollCodeProvider } from './context/EnrollCodeContext'
import { ChattingProvider } from './context/ChattingContext'


function App() {
  return (
      <div className="App">
        <div className="ContentBox">
            <NavBar/>
            <EnrollCodeProvider>
              <div className="Content">
                <Route path="/" exact={true} component={Home} />
                <Route path="/enroll" component={Enroll} />
              </div>
            </EnrollCodeProvider>
        </div>
        <ChattingProvider>
          <Chatting/>
        </ChattingProvider>
      </div>
  );
}

export default App;
