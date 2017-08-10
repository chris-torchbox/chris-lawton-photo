import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { allCollectionsFetch } from '../actions/collections';
import PostsGrid from './../components/posts-grid';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllCollections();
  }

  isPageReady() {
    const collectionsExist = !_.isEmpty(this.props.collections);

    if (collectionsExist) {
      return true;
    }

    return false;
  }

  render() {
    if (!this.isPageReady()) {
      return <div />;
    }

    return (
      <div>
        <Helmet>
          <title>Chris Lawton Photography</title>
        </Helmet>
        <p>Home</p>
        <PostsGrid posts={this.props.collections} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.collections.collections,
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(allCollectionsFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
