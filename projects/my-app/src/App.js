import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar';
import './components/Ninja';
import Navbar from './Navbar';
import Ninja from './components/Ninja';
import AddNinja from './components/AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ken', age: '35', belt: 'black', id: 1 },
      { name: 'Bison', age: '40', belt: 'n/a', id: 2 },
      { name: 'Ryu', age: '25', belt: 'gold', id: 3 }
    ]
  };

  addNinja = ninja => {
    //THIS IS BAD PRACTICE, need to use this.setState function. Using this.setState will update the DOM so any components using this.props will also be updated with the new ninja array.
    //this.state.ninjas.push(ninja);

    //adds an id to ninja
    ninja.id = Math.random();
    //The three dots ... is call spread operator. It spreads each element from this.state.ninjas into ninjas. Making a new copy.  Also adding new ninja to the array
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
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
          <AddNinja add={this.addNinja} />

          {console.log(this.state.ninjas)}
        </header>
      </div>
    );
  }
}
export default App;
