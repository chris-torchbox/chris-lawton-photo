import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderMain = styled.header`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 5px 15px;

    &.is-hidden {
        display: none;
    }
`;

export const SiteTitle = styled(NavLink)`
    font-family: 'azedobold', sans-serif;
    font-size: 3rem;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;

export const GridTwo = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 10px), 1fr));
`;

export const GridThree = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(calc(33% - 10px), 1fr));
`;

export const Card = styled(NavLink)`
    color: white;
    position: relative;
    background-color: lightgrey;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

export const CardContent = styled.div`
    align-items: center;
    bottom: 20px;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h3`
    font-weight: 700;
`;

export const Teaser = styled.p`
    margin-bottom: 10px;
`;

export const Date = styled.p`

`;

// Post
export const TextContainer = styled.div`
    max-width: 650px;
    margin: 4rem auto;
`;

export const PhotoContainer = styled.div`
    max-width: 1060px;
    margin: 4rem auto;
`;

export const Hero = styled.div`
  height: 100vh;
  color: white;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000070;
  }
`;

export const HeroHeading = styled.h1`
  z-index: 10;
`;

export const HeroSubHeading = styled.h2`
  z-index: 10;
`;

export const HeroTeaser = styled.h2`
  z-index: 10;
  color: white;
  z-index: 10;
  font-family: 'Cormorant', serif;
  font-size: 32px;
  font-weight: 200;
  font-style: italic;
  margin: 0;
`;

export const BreakoutPhoto = styled.div`
    position: relative;
    right: 50%;
    left: 50%;
    width: 100vw;
    margin-right: -50vw;
    margin-left: -50vw;
`;
