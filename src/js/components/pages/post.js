import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Hero, HeroHeading, HeroSubHeading, TextContainer, PhotoContainer } from './../styled';

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

    const arrowStyle = {
      zIndex: 20,
      width: 30,
      position: 'absolute',
      top: 20,
      left: 20,
    };

    return (
      <div>
        <Helmet>
          <title>{post.title} | Chris Lawton Photography</title>
        </Helmet>
        <Hero style={divStyle}>
          <NavLink to="/">
            <svg style={arrowStyle} fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6H8V3c0-.484-.375-1-1-1-.461 0-.695.287-1 .54L.625 7C.242 7.313 0 7.555 0 8s.242.688.625 1L6 13.46c.305.253.539.54 1 .54.625 0 1-.516 1-1v-3h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z" />
            </svg>
          </NavLink>
          <HeroHeading>{post.title}</HeroHeading>
          <HeroSubHeading>{post.country}</HeroSubHeading>
        </Hero>

        <TextContainer>
          <h3>{post.subtitle}</h3>
          <p>{post.textOne}</p>
        </TextContainer>
        <PhotoContainer>
          <img src={post.imgOne} />
        </PhotoContainer>
      </div>
    );
  }
}

export default Post;
