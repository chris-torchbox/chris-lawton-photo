import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { photosFetch } from '../actions/photos';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPhotos(1028021);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Helmet>
          <title>Post</title>
        </Helmet>
        This is a post page
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: id => dispatch(photosFetch(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
