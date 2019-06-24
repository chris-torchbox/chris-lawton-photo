import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Image, CloudinaryContext } from 'cloudinary-react';
import BackgroundImage from 'react-background-image-loader';
import { DiscussionEmbed } from 'disqus-react';
import { useSpring, animated } from 'react-spring';

import TextBlock from '../TextBlock';

import { HeroHeading, HeroTeaser } from './../styled/hero';
import { EyeContainer } from './../styled/eye-container';
import { PhotoContainer, BreakoutPhoto } from './../styled/container';
import { GridTwo, GridThree } from './../styled/grid';
import Questions from './../styled/questions';
import Arrow from './../styled/svg/arrow';
import Eye from './../styled/svg/eye';
import { PreComment } from './../styled/pre-comment';
import useFetch from '../hooks';

const Post = ({ match }) => {
  const devUrl = `http://localhost:8080/src/js/data/trips/${match.params.post}.json`;
  const prodUrl = `https://chrislawton.co.uk/src/js/data/trips/${match.params.post}.json`;
  const url = (process.env.NODE_ENV === 'development') ? devUrl : prodUrl;

  const [data, loading] = useFetch(url);
  const fade = useSpring({
    zIndex: 1,
    opacity: loading ? 0 : 1,
    transform: loading ? 'translate3d(0px, 20px, 0px)' : 'translate3d(0px, 0px, 0px)',
  });

  function revealHero() {
    document.querySelector('.hero').classList.toggle('is-revealed');
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Helmet>
            <title>{data.title} | Chris Lawton Photography</title>
          </Helmet>

          <CloudinaryContext cloudName="chrislawton" quality="40" flags="progressive">

            <BackgroundImage src={data.hero.main} placeholder={data.hero.placeholder} className="hero">
              <NavLink to="/">
                <Arrow />
              </NavLink>
              <animated.div style={fade}>
                <HeroHeading>{data.title}</HeroHeading>
                <HeroTeaser>{data.teaser}</HeroTeaser>
              </animated.div>
              <EyeContainer onClick={revealHero} onKeyDown={revealHero} tabIndex="0" role="button" >
                <Eye />
              </EyeContainer>
            </BackgroundImage>

            {data.textOne &&
              <TextBlock text={data.textOne} />
            }

            {data.gridTwoFirst &&
              <PhotoContainer>
                <CloudinaryContext width="1050">
                  <GridTwo>
                    <Image publicId={data.gridTwoFirst.imgOne} />
                    <Image publicId={data.gridTwoFirst.imgTwo} />
                  </GridTwo>
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.gridOneFirst &&
              <PhotoContainer>
                <CloudinaryContext width="2120">
                  <Image publicId={data.gridOneFirst} />
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.textTwo &&
              <TextBlock text={data.textTwo} />
            }

            {data.gridSix &&
              <PhotoContainer>
                <CloudinaryContext width="692">
                  <GridThree>
                    <Image publicId={data.gridSix.imgOne} />
                    <Image publicId={data.gridSix.imgTwo} />
                    <Image publicId={data.gridSix.imgThree} />
                    <Image publicId={data.gridSix.imgFour} />
                    <Image publicId={data.gridSix.imgFive} />
                    <Image publicId={data.gridSix.imgSix} />
                  </GridThree>
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.textThree &&
              <TextBlock text={data.textThree} />
            }

            {data.breakoutFirst &&
              <BreakoutPhoto>
                <Image publicId={data.breakoutFirst} />
              </BreakoutPhoto>
            }

            {data.gridTwoSecond &&
              <PhotoContainer>
                <CloudinaryContext width="1050">
                  <GridTwo>
                    <Image publicId={data.gridTwoSecond.imgOne} />
                    <Image publicId={data.gridTwoSecond.imgTwo} />
                  </GridTwo>
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.textFour &&
              <TextBlock text={data.textFour} />
            }

            {data.breakoutSecond &&
              <BreakoutPhoto>
                <Image publicId={data.breakoutSecond} />
              </BreakoutPhoto>
            }

            {data.gridThree &&
              <PhotoContainer>
                <CloudinaryContext width="692">
                  <GridThree>
                    <Image publicId={data.gridThree.imgOne} />
                    <Image publicId={data.gridThree.imgTwo} />
                    <Image publicId={data.gridThree.imgThree} />
                  </GridThree>
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.gridOneSecond &&
              <PhotoContainer>
                <CloudinaryContext width="2120">
                  <Image publicId={data.gridOneSecond} />
                </CloudinaryContext>
              </PhotoContainer>
            }

            {data.questions.bestView &&
              <Questions answers={data.questions} />
            }

            <PreComment>What did I miss? Help others by leaving a comment below!</PreComment>

            <div style={{ maxWidth: '650px', margin: '1rem auto' }}>
              <DiscussionEmbed shortname="chrislawton" />
            </div>
          </CloudinaryContext>
        </div>
      )}
    </React.Fragment>
  );
};

export default Post;
