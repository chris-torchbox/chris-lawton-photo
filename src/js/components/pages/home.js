import React from 'react';
import PostsGrid from './../../components/posts-grid';
import postsData from './../../data/posts';
import Header from './../../components/header';

const Home = () => (
  <React.Fragment>
    <Header />
    <PostsGrid posts={postsData} />
  </React.Fragment>
);

export default Home;
