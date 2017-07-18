import React from 'react';
import PostsGrid from './../../components/posts-grid';
import postsData from './../../data/posts';

function Home() {
  return (
    <div>
      <PostsGrid posts={postsData} />
    </div>
  );
}

export default Home;
