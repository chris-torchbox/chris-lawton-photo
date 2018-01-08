import React from 'react';
import Helmet from 'react-helmet';
import { Hero } from './../styled';

function Post(props) {
  return (
    <div>
      <Helmet>
        <title>{props.match.params.post} | Chris Lawton Photography</title>
      </Helmet>
      <Hero />
      {props.match.params.post}
    </div>
  );
}

export default Post;
