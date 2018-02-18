import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Hero, HeroHeading, HeroTeaser } from './../styled/hero';
import { TextContainer, PhotoContainer, BreakoutPhoto } from './../styled/container';
import { GridTwo, GridThree } from './../styled/grid';
import Questions from './../styled/questions';

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

    const eyeStyle = {
      zIndex: 20,
      width: 30,
      position: 'absolute',
      top: 20,
      right: 20,
    };

    function isRetina(first, second) {
      if (window.devicePixelRatio >= 2) {
        return second;
      }
      return first;
    }

    function revealHero() {
      document.querySelector('.hero').classList.toggle('is-revealed');
    }

    return (
      <div>
        <Helmet>
          <title>{post.title} | Chris Lawton Photography</title>
        </Helmet>
        <Hero style={divStyle} className="hero">
          <NavLink to="/">
            <svg style={arrowStyle} fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6H8V3c0-.484-.375-1-1-1-.461 0-.695.287-1 .54L.625 7C.242 7.313 0 7.555 0 8s.242.688.625 1L6 13.46c.305.253.539.54 1 .54.625 0 1-.516 1-1v-3h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z" />
            </svg>
          </NavLink>
          <HeroHeading>{post.title}</HeroHeading>
          <HeroTeaser>{post.teaser}</HeroTeaser>
          <div onClick={revealHero}>
            <svg style={eyeStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85">
              <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2   s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025   c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3   C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7   c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z" fill="#FFFFFF" />
            </svg>
          </div>
        </Hero>

        <TextContainer>
          <h3>{post.subtitle}</h3>
          <p>{post.textOne}</p>
        </TextContainer>
        <PhotoContainer>
          <img src={isRetina(post.imgOne1x, post.imgOne2x)} alt="" />
        </PhotoContainer>
        <BreakoutPhoto>
          <img src="https://picsum.photos/1920/1080" alt="" />
        </BreakoutPhoto>

        <TextContainer>
          <p>{post.textOne}</p>
        </TextContainer>

        {post.gridTwo ? (
          <PhotoContainer>
            <GridTwo>
              <img src={post.gridTwo.imgOne} alt="" />
              <img src={post.gridTwo.imgOne} alt="" />
            </GridTwo>
          </PhotoContainer>
        ) : (
          <span className="is-hidden" />
        )}

        <TextContainer>
          <h3>{post.subtitle}</h3>
          <p>{post.textOne}</p>
        </TextContainer>

        {post.gridThree ? (
          <PhotoContainer>
            <GridThree>
              <img src={post.gridThree.imgOne} alt="" />
              <img src={post.gridThree.imgTwo} alt="" />
              <img src={post.gridThree.imgThree} alt="" />
            </GridThree>
          </PhotoContainer>
        ) : (
          <span className="is-hidden" />
        )}
        <Questions />

      </div>
    );
  }
}

export default Post;
