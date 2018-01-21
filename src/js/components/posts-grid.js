import React, { Component } from 'react';
import { Card, CardContent, Title, Date, Grid } from './styled';

class PostsGrid extends Component {
  renderPosts() {
    return this.props.posts.map(post =>
      (
        <Card to={post.slug} key={post.title}>
          <div className="overlay" />
          <CardContent>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </CardContent>
        </Card>
      ));
  }

  render() {
    const posts = this.renderPosts();

    return (
      <Grid>
        {posts}
      </Grid>
    );
  }
}

export default PostsGrid;
