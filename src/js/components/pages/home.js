import React from 'react';
import PostsGrid from './../../components/posts-grid';
import postsData from './../../data/posts';

const Home = () => <PostsGrid posts={postsData} />;

export default Home;
