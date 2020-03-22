import React, { Component } from 'react';
// import logo from './logo.svg';
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

    //Making a copy is necessary because if we update ninja.id directly, it would update the addNing state, which is wrong.

    ninja = { ...ninja }; // making a copy and leave the original AddNinja state alone (the state that was passed in)

    ninja.id = Math.random();

    //adds an id to ninja
    //The three dots ... is call spread operator. It spreads each element from this.state.ninjas into ninjas. Making a new copy.  Also adding new ninja to the array

    console.log('new Ninja: ' + Object.values(ninja));
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  dismissNinja = id => {
    //Ninjas that does not have id equal to the one we want to remove stays in the new array
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
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
          <Ninja dismissNinja={this.dismissNinja} ninjas={this.state.ninjas} />
          <AddNinja add={this.addNinja} />

          {console.log(this.state.ninjas)}
        </header>
      </div>
    );
  }
}
export default App;
