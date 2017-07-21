import React, { Component } from 'react';
import { connect } from 'rect-redux';
import Helmet from 'react-helmet';
import { collectionsFetch } from '../actions/collections';

class Page extends Component {
  componentDidMount() {
    this.props.fetchCollection();
  }
}