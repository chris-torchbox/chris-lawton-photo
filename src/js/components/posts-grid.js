import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostsGrid extends Component {
  renderPosts() {
    const allCollections = this.props.posts;

    const allCollectionsArray = Object.keys(allCollections).map((key) => {
      return allCollections[key];
    });

    console.log(allCollectionsArray);

    return allCollectionsArray.map(collection =>
      <NavLink to={this.parseCollectionHref(collection.title)} key={collection.title} className="grid-item">
        <div className="overlay" />
        {/*<img src={collection.cover_photo.urls.small} alt="" />*/}
        <img src="https://placehold.it/400x267" alt="" />
        <div className="grid-item__content">
          <div className="grid-item__title">
            {collection.title}
          </div>
        </div>
      </NavLink>,
    );
  }

  parseCollectionHref(href) {
    return `/trips/${href.toLowerCase()}`;
  }

  render() {
    const posts = this.renderPosts();

    return (
      <div className="grid">
        {posts}
      </div>
    );
  }
}

export default PostsGrid;
