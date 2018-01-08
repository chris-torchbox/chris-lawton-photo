import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PostData from './../data/trips/bristol';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 426px);
`;

export const Card = styled(NavLink)`
    color: white;
    position: relative;
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

export const Hero = styled.div`
  height: 100vh;
  background: url(${PostData[0].hero}), no-repeat, center;
  background-size: cover;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000070;
  }
`;
