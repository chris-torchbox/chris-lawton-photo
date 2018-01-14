import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Hero, HeroHeading, HeroSubHeading } from './../styled';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      tripData: null,
    };
  }

  componentDidMount() {
    document.querySelector('header').classList.add('is-hidden');
    // const url = `./../../data/trips/.json`;
    const url = `http://localhost:8080/src/js/data/trips/${this.props.match.params.post}.json`;

    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          tripData: data,
          isLoading: false,
        });
      });
  }

  componentWillUnmount() {
    document.querySelector('header').classList.remove('is-hidden');
  }

  render() {
    if (this.state.isLoading) {
      // todo - add spinner
      return null;
    }
    const post = this.state.tripData;

    const divStyle = {
      backgroundImage: `url('${post.hero}')`,
    };

    return (
      <div>
        <Helmet>
          <title>{post.title} | Chris Lawton Photography</title>
        </Helmet>
        <Hero style={divStyle}>
          <HeroHeading>{post.title}</HeroHeading>
          <HeroSubHeading>{post.country}</HeroSubHeading>
        </Hero>
      </div>
    );
  }
}

export default Post;
