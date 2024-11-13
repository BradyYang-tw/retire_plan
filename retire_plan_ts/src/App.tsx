import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './assets/logo.svg';
import Example from './components/tailwind/Example/Example';
import Sidebar from './containers/sidebar/Sidebar';
import Main from './containers/main/Main';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="Container">
        {/* <Main></Main> */}
        <Outlet ></Outlet>
      </div>
      
      {/* <Example></Example> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
