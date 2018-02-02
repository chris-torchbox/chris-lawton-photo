import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
