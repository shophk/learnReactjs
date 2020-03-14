import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar';
import './components/Ninja';
import Navbar from './Navbar';
import Ninja from './components/Ninja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ken', age: '35', belt: 'black', id: 1 },
      { name: 'Bison', age: '40', belt: 'n/a', id: 2 },
      { name: 'Ken', age: '35', belt: 'gold', id: 3 }
    ]
  };
  render() {
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
          <Ninja ninjas={this.state.ninjas} />
          {/* <br />
          <Ninja name="Ryu" age="34" belt="white" /> */}
        </header>
      </div>
    );
  }
}
export default App;
