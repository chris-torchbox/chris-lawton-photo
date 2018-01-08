import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 426px);
`;

export const Card = styled(NavLink)`
  color: white;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const CardContent = styled.div`
  display: flex;
`;

export const Teaser = styled.p`

`;

export const Date = styled.p`

`;

export const Hero = styled.div`
  height: 100vh;
  background: lightgrey;
`;
