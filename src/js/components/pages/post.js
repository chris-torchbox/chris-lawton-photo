import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Image, CloudinaryContext } from 'cloudinary-react';
import BackgroundImage from 'react-background-image-loader';
import { DiscussionEmbed } from 'disqus-react';
import { HeroHeading, HeroTeaser } from './../styled/hero';
import { EyeContainer } from './../styled/eye-container';
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

    function revealHero() {
      document.querySelector('.hero').classList.toggle('is-revealed');
    }

    return (
      <div>
        <Helmet>
          <title>{post.title} | Chris Lawton Photography</title>
        </Helmet>

        <CloudinaryContext cloudName="chrislawton" quality="40" flags="progressive">

          <BackgroundImage src={post.hero.main} placeholder={post.hero.placeholder} className="hero">
            <NavLink to="/">
              <Arrow />
            </NavLink>
            <HeroHeading>{post.title}</HeroHeading>
            <HeroTeaser>{post.teaser}</HeroTeaser>
            <EyeContainer onClick={revealHero} onKeyDown={this.revealHero} tabIndex="0" role="button" >
              <Eye />
            </EyeContainer>
          </BackgroundImage>

          <TextContainer>
            <p>{post.textOne}</p>
          </TextContainer>

          {post.gridTwoFirst ? (
            <PhotoContainer>
              <CloudinaryContext width="1050">
                <GridTwo>
                  <Image publicId={post.gridTwoFirst.imgOne} />
                  <Image publicId={post.gridTwoFirst.imgTwo} />
                </GridTwo>
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          {post.gridOneFirst ? (
            <PhotoContainer>
              <CloudinaryContext width="2120">
                <Image publicId={post.gridOneFirst} />
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          <TextContainer>
            <p>{post.textTwo}</p>
          </TextContainer>

          {post.gridSix ? (
            <PhotoContainer>
              <CloudinaryContext width="692">
                <GridThree>
                  <Image publicId={post.gridSix.imgOne} />
                  <Image publicId={post.gridSix.imgTwo} />
                  <Image publicId={post.gridSix.imgThree} />
                  <Image publicId={post.gridSix.imgFour} />
                  <Image publicId={post.gridSix.imgFive} />
                  <Image publicId={post.gridSix.imgSix} />
                </GridThree>
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          <TextContainer>
            <p>{post.textThree}</p>
          </TextContainer>

          {post.breakoutFirst ? (
            <BreakoutPhoto>
              <Image publicId={post.breakoutFirst} />
            </BreakoutPhoto>
          ) : (
            <span className="is-hidden" />
          )}

          {post.gridTwoSecond ? (
            <PhotoContainer>
              <CloudinaryContext width="1050">
                <GridTwo>
                  <Image publicId={post.gridTwoSecond.imgOne} />
                  <Image publicId={post.gridTwoSecond.imgTwo} />
                </GridTwo>
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          <TextContainer>
            <p>{post.textFour}</p>
          </TextContainer>

          {post.breakoutSecond ? (
            <BreakoutPhoto>
              <Image publicId={post.breakoutSecond} />
            </BreakoutPhoto>
          ) : (
            <span className="is-hidden" />
          )}

          {post.gridThree ? (
            <PhotoContainer>
              <CloudinaryContext width="692">
                <GridThree>
                  <Image publicId={post.gridThree.imgOne} />
                  <Image publicId={post.gridThree.imgTwo} />
                  <Image publicId={post.gridThree.imgThree} />
                </GridThree>
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          {post.gridOneSecond ? (
            <PhotoContainer>
              <CloudinaryContext width="2120">
                <Image publicId={post.gridOneSecond} />
              </CloudinaryContext>
            </PhotoContainer>
          ) : (
            <span className="is-hidden" />
          )}

          {post.questions.bestView ? (
            <Questions answers={post.questions} />
          ) : (
            <span className="is-hidden" />
          )}


          <TextContainer>
            <DiscussionEmbed shortname="chrislawton" />
          </TextContainer>
        </CloudinaryContext>
      </div>
    );
  }
}

export default Post;
