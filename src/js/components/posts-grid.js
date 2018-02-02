import React, { Component } from 'react';
import { Card, CardContent } from './styled/card';
import { Title } from './styled/title';
import { Date } from './styled/date';
import { Grid } from './styled/grid';

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
