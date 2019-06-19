import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from './media-queries';
import { CardContent } from './card-content';

export const Card = styled(NavLink)`
    color: white;
    position: relative;
    background-color: lightgrey;
    background-size: cover;
    background-position: center;
    filter: grayscale(0.3);

    ${mq.handheld`
        height: 330px;
    `}

    ${mq.laptop`
        height: 540px;
    `}

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    &:hover ${CardContent} {
        bottom: 40px;
    }

    &:hover {
        filter: grayscale(0);
    }
`;

export default Card;
