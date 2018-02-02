import styled from 'styled-components';

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
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  &.is-revealed {
      &:after {
          opacity: 0;
      }
  }
`;

export const HeroHeading = styled.h1`
  z-index: 10;
  opacity: 1;
  transition: opacity 0.25s ease;

  .is-revealed & {
      opacity: 0;
  }
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
  opacity: 1;
  transition: opacity 0.25s ease;

  .is-revealed & {
      opacity: 0;
  }
`;
