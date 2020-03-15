import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleSubmit = e => {
    e.preventDefault();

    //Watch out for how the 'add' functions handles the data from this state. Make sure it means a copy of the state data first before doing operations on it.
    this.props.add(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input types="text" id="name" onChange={this.handleChange} />

          <label htmlFor="age">Age:</label>
          <input types="text" id="age" onChange={this.handleChange} />

          <label htmlFor="belt">Belt:</label>
          <input types="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
