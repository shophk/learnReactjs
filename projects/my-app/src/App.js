import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Navbar />
        <h1>Welcome to my App</h1>
        <p className="thick text-muted">How are you?</p>
      </header>
    </div>
  );
}

export default App;
