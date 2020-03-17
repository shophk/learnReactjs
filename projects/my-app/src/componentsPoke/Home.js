import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    //this time out tests that function is ran later after page had been setup
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        console.log(res);
        this.setState({ posts: res.data.slice(0, 9) });
      });
    }, 2000);
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
export default Home;
