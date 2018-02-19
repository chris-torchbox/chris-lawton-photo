import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
color: white;
position: relative;
background-color: lightgrey;
background-size: contain;

&:before {
    content: '';
    display: block;
    padding-top: 100%;
}
`;

export default Card;
