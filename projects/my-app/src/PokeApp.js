import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Ninja';
import Navbar from './componentsPoke/Navbar';
import Home from './componentsPoke/Home';
import Contact from './componentsPoke/Contact';
import About from './componentsPoke/About';
import Post from './componentsPoke/Post';

class PokeApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="PokeApp">
          {/* <header className="PokeApp-header"></header> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default PokeApp;
