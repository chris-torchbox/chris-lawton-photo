import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Hero, HeroHeading, HeroTeaser } from './../styled/hero';
import { TextContainer, PhotoContainer, BreakoutPhoto } from './../styled/container';
import { GridTwo, GridThree } from './../styled/grid';
import Questions from './../styled/questions';
import Arrow from './../styled/svg/arrow';
import Eye from './../styled/svg/eye';

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
        <Hero style={{ backgroundImage: `url(${post.hero})` }} className="hero">
          <NavLink to="/">
            <Arrow />
          </NavLink>
          <HeroHeading>{post.title}</HeroHeading>
          <HeroTeaser>{post.teaser}</HeroTeaser>
          <div onClick={revealHero} onKeyDown={this.revealHero} tabIndex="0" role="button" >
            <Eye />
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
