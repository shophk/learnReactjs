import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import { deletePost } from '../actions/postActions';
class Post extends Component {
  state = {
    post: null
  };

  //axios referrence
  // componentDidMount() {
  //   this.CancelToken = axios.CancelToken;
  //   this.source = this.CancelToken.source();
  //   // console.log(this.props);
  //   let id = this.props.match.params.post_id;
  //   console.log('Post Mounted: ' + id);

  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/' + id, {
  //       cancelToken: this.source.token
  //     })
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       });
  //     });
  // }

  // componentWillUnmount() {
  //   console.log('POST UNMOUNT');
  //   this.source.cancel('Axios request canceled at Post.');
  // }
  //end of reference
  handleClick = () => {
    this.props.deletePost(this.props.post.id);

    //redirects to home page
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {/* <h4>Route Params {this.state.id}</h4> */}
        <div className="center">{post}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      //the rootReducer receives this dispatch action
      dispatch(deletePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
