import React, { Component } from 'react';
import { Card } from './styled/card';
import { CardContent } from './styled/card-content';
import { Title } from './styled/title';
import { Date } from './styled/date';
import { Grid } from './styled/grid';
import { Overlay } from './styled/overlay';

class PostsGrid extends Component {
  renderPosts() {
    return this.props.posts.map(post =>
      (
        <Card to={post.slug} key={post.title} style={{ backgroundImage: `url(${post.thumbnail})` }}>
          <Overlay />
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
