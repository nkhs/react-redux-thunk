import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import Post from './Post'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    var { posts } = this.props

    return posts && posts.map(p => {
      return <Post key={p.id} p={p}/>
    });
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
