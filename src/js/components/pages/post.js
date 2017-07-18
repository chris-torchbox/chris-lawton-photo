import React from 'react';
import Helmet from 'react-helmet';

function Post(props) {
  return (
    <div>
      <Helmet>
        <title>{props.match.params.post}</title>
      </Helmet>
      {props.match.params.post}
    </div>
  );
}

export default Post;
