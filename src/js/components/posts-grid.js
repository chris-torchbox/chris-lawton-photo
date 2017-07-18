import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostsGrid extends Component {
  renderPosts() {
    return this.props.posts.map(post =>
      <NavLink to={post.slug} key={post.title}>
        {post.title}
      </NavLink>,
    );
  }

  render() {
    const posts = this.renderPosts();

    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default PostsGrid;
