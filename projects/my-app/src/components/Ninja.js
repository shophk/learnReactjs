import React, { Component } from 'react';

class Ninja extends Component {
  render() {
    console.log(this.props);

    //destructure
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div> name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div> belt: {ninja.belt}</div>
          <br />
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}
export default Ninja;
