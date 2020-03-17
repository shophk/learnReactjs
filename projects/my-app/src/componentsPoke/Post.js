import React, { Component } from 'react';

class Post extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    console.log(id);
    this.setState({
      id: id
    });
  }
  render() {
    return (
      <div className="container">
        <div className="center">
          <h4>Route Params {this.state.id}</h4>
        </div>
      </div>
    );
  }
}
export default Post;
