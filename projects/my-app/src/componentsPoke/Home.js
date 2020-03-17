import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();

    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        cancelToken: this.source.token
      })
      .then(res => {
        console.log(res);
        this.setState({ posts: res.data.slice(0, 9) });
        this.source.cancel();
      });
  }
  componentWillUnmount() {
    this.source.cancel('Axios request canceled at Home.');
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
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
